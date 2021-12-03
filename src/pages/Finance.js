import SideNavbar from "../components/SideNavbar"
import { Tab } from '@headlessui/react'
// import { useState } from "react"
import { gql, useMutation, useSubscription } from '@apollo/client'
import { TrashIcon, RefreshIcon } from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const FinanceCard = ({initData, income=true}) =>{
    const inStyle = 'font-bold text-green-500'
    const outStyle = 'font-bold text-red-500'

    let addQuery = 'delete_incomeReport_by_pk'
    if(income){
        addQuery = 'delete_incomeReport_by_pk'
    }else(
        addQuery = 'delete_outcomeReport_by_pk'
    )

    const delete_query = gql`
    mutation MyMutation {
        ${addQuery}(id: ${initData.id}) {
          id
        }
      }
    `
    // eslint-disable-next-line no-use-before-define
    const [DeleteData, { error }] = useMutation(delete_query)
    if (error) return `Submission error! ${error.message}`;


    return(
        <div className="flex flex-col h-auto w-11/12 bg-gpw mx-5 my-5 rounded-md p-5">
            <div className="flex flex-row justify-between">
                <div className="ml-5">
                    <h2 className='font-bold'>{initData.date}</h2>
                </div>
                <div className="mr-5">
                    <h2 className={income? inStyle : outStyle}>Rp{initData.amount}</h2>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>
                    <p className='m-5 mt-5 max-w-3xl'>
                    {initData.description}
                    </p>
                </div>
                {/* delete button */}
                <div className="h-8 w-8 bg-red-500 mt-10 rounded-md text-center justify-center align-middle p-1/2 text-gpw cursor-pointer" onClick={DeleteData}>
                    <TrashIcon className='w-8 h-8' />
                </div>

            </div>
        </div>
    )
}

const FinanceReport = () =>{


    const subs_income = gql`
    subscription MySubscription {
        incomeReport {
          id
          description
          date
          amount
        }
      }`

      const subs_outcome = gql`
      subscription MySubscription {
          outcomeReport {
            id
            description
            date
            amount
          }
        }`
        // const { loading, error, data:yolo } = useQuery(get_income_data)
        const { loading:loading1, error:error1, data:subs1 } = useSubscription(subs_income)
        const { loading:loading2, error:error2, data:subs2 } = useSubscription(subs_outcome)

        const incomeData = subs1?.incomeReport
        const outcomeData = subs2?.outcomeReport
        if (loading1){ return ('loading')}
        if (error1) {return null}        
        if (loading2){ return ('loading')}
        if (error2) {return null}

        // console.log(incomeData)
        const class_inActive = 'w-44 h-10 text-gpw bg-gpc  m-2 text-center rounded-md font-bold'

        const class_Active = 'w-44 h-10 bg-none border-2 text-gpc border-gpc h m-2 text-center  rounded-md font-bold'

        // console.log(getInitData)
    return(
        <div className="flex flex-col w-full justify-item-center">
            <Tab.Group>
                <div className="flex justify-between w-1/3 h-14 bg-gpgd rounded-t-md shadow-lg">
                    <Tab.List>
                        <Tab className={({ selected }) =>
                        classNames(
                            selected
                            ? class_Active
                            : class_inActive
                        )}>Income reports</Tab>
                        <Tab className={({ selected }) =>
                        classNames(
                            selected
                            ? class_Active
                            : class_inActive
                        )}>Outcome reports</Tab>
                    </Tab.List>
                    
                </div>
                <div className="bg-gpgd min-h-10 rounded-b-md rounded-tr-md">
                    <div className="relative flex items-center justify-center h-12 w-12 text-gpc mx-auto my-5 bg-gray-800 shadow-lg hover:bg-gpc hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear hover:cursor-pointer group"><RefreshIcon className='w-8 h-8' /></div>
                    <Tab.Panels>
                        {/* income */}
                        <Tab.Panel >
                            {incomeData.map((initData)=>(
                                <FinanceCard key={initData.id} initData={initData} income={true} />
                            ))}
                        </Tab.Panel>
                        {/* outcome */}
                        <Tab.Panel>
                            {/* <FinanceCard /> */}
                            {outcomeData.map((initData)=>(
                                <FinanceCard key={initData.id} initData={initData} income={false} />
                            ))}
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    )
}


const Finance = () => {

    return (
        <div>
            <div className ='flex flex-col'>
                {/* <Navbar /> */}
                <div>
                    <SideNavbar />
                </div>
                <div className='flex'>
                    <div className="w-24 left-0 top-0" />
                    <div className="flex-auto">
                        <div className="flex align-middle justify-center py-32">
                            <div className="w-2/3">
                                <FinanceReport />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finance
