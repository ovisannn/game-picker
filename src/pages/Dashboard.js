// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import SideNavbar from '../components/SideNavbar'
import { useSelector } from 'react-redux'
import { gql, useMutation, useQuery, useSubscription } from '@apollo/client'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const TotalIncome = () =>{
    const getDataQuery = gql`
    subscription MySubscription {
        incomeReport_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      `
    const { loading, error, data } = useSubscription(getDataQuery)
    if (loading) return 'getting data';
    if (error) return `error! ${error.message}`;
    return(
        <h2 className='text-gpw text-2xl font-bold'>
        Rp.{data?.incomeReport_aggregate.aggregate.sum.amount} 
   </h2>
    )
}

const TotalOutcome = () =>{
    const getDataQuery = gql`
    subscription MySubscription {
        outcomeReport_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      `
    const { loading, error, data } = useSubscription(getDataQuery)
    if (loading) return 'getting data';
    if (error) return `error! ${error.message}`;
    
    return(
        <h2 className='text-gpw text-2xl font-bold'>
        Rp.{data?.outcomeReport_aggregate.aggregate.sum.amount}
   </h2>
    )
}
const TotalAmountSubs = () =>{

    return (
        <div className="flex flex-auto align-middle justify-center pt-10">
        <div className='h-20 w-1/4 mx-10 text-center'>
            <h2 className='text-green-500 text-2xl font-bold'>
                Income
            </h2>
            <TotalIncome />
        </div>
        <div className='h-20 w-1/4 mx-10 text-center'>
            <h2 className='text-red-400 text-2xl font-bold'>
                Outcome
            </h2>
            <TotalOutcome />
        </div>
    </div>
    )
}

const InputSavings =()=>{
    const [amount, set_amount] = useState(0)
    const [date, set_date] = useState('')
    const [desc, set_desc] = useState('')


    const input_income = gql`
    mutation MyMutation {
        insert_incomeReport_one(object: {amount: ${amount}, date: "${date}", description: "${desc}"}) {
          id
        }
      }
    `
    const [inputIncome, { loading, error }] = useMutation(input_income)
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    return(
        <div className="w-4/12 h-auto bg-gpgd shadow-lg ml-24 rounded-lg p-6 mt-12 left-24 transition-all hover:border-4 hover:border-gpc"><h2 className='text-xl font-bold text-gpw'>input income</h2>
            <div className='flex flex-col justify-center '>
                <h2 className='mt-5 text-gpw'>
                How much money do you save?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="number" placeholder='IDR' onChange={(e)=>set_amount(e.target.value)} />
                <h2 className='mt-5 text-gpw'>
                When?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="date" onChange={(e)=>set_date(e.target.value)} />
                <h2 className='mt-5 text-gpw'>
                Wanna say something?
                </h2>
                <textarea className="w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear" id="" onChange={(e)=>set_desc(e.target.value)} />
                <div className="h-auto w-2/3 mt-10 border-2 border-gpc hover:border-0 rounded-md hover:bg-gpc transition-all ease-linear text-center font-extrabold text-xl py-4 hover:cursor-pointer text-gpc hover:text-gpcl" onClick={inputIncome}> Submit</div>
            </div>
        </div>
    )
}


const InputOutcome =()=>{
    const [amount, set_amount] = useState(0)
    const [date, set_date] = useState('')
    const [desc, set_desc] = useState('')


    const input_outcome = gql`
    mutation MyMutation {
        insert_outcomeReport_one(object: {amount: ${amount}, date: "${date}", description: "${desc}"}) {
          id
        }
      }
    `
    const [inputOutcome, { loading, error }] = useMutation(input_outcome)
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;


    return(
        <div className="w-4/12 h-auto bg-gpgd shadow-lg ml-24 rounded-lg p-6 mt-12 left-24 transition-all hover:border-4 hover:border-gpc"><h2 className='text-xl font-bold text-gpw'>input outcome</h2>
            <div className='flex flex-col justify-center '>
                <h2 className='mt-5 text-gpw'>
                How much money do you spend?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="number" placeholder='IDR' onChange={(e)=>set_amount(e.target.value)} />
                <h2 className='mt-5 text-gpw'>
                When?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="date" onChange={(e)=>set_date(e.target.value)} />
                <h2 className='mt-5 text-gpw'>
                Wanna say something?
                </h2>
                <textarea className="w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear" id="" onChange={(e)=>set_desc(e.target.value)} />
                <div className="h-auto w-2/3 mt-10 border-2 border-gpc hover:border-0 rounded-md hover:bg-gpc transition-all ease-linear text-center font-extrabold text-xl py-4 hover:cursor-pointer text-gpc hover:text-gpcl" onClick={inputOutcome}> Submit</div>
            </div>
        </div>
    )
}

const Dashboard = () => {

    const account = useSelector((state)=>state.account)
    const get_user =gql`
    query MyQuery {
        user(where: {password: {_eq: "${account.username}"}, username: {_eq: "${account.password}"}}) {
          id
          id_detail
          password
          username
        }
      }
    `
    const { loading, error, data } = useQuery(get_user)
    if (loading){ return ('loading')}
    if (error) {return null}
    // console.log(data?.user)
        
    if (account.username ==='' || account.password ==='' || data?.user.length === 0){
        return(
            <div>
            <div className ='flex flex-col'>
                {/* <Navbar /> */}
                <div>
                    <SideNavbar />
                </div>
                <div className='flex'>
                    <div className="w-24 left-0 top-0" />
                    <div className="flex-auto">
                        <div className="flex flex-row align-middle justify-center pt-32">
                            {alert('Session ended or you might enter wrong login info')}
                            <Link to='/login'>
                                <div className="w-32 h-12 bg-gpc cursor-pointer text-gpw font-bold text-center pt-3">Relogin</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return (
    <>
        <div>
            <div className ='flex flex-col'>
                {/* <Navbar /> */}
                <div>
                    <SideNavbar />
                </div>
                <div className='flex'>
                    <div className="w-24 left-0 top-0" />
                    <div className="flex-auto">
                        <div className="flex align-middle justify-center mt-20">
                            <div className="h-auto w-1/2 border-2 border-gpc p-10 rounded-md text-center">
                                <h1 className='text-white font-bold text-4xl'>
                                    Welcome {account.username}!
                                </h1>
                                <TotalAmountSubs />
                            </div>
                        </div>
                        <div className="flex align-middle justify-center">
                            <InputSavings />
                            <InputOutcome />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </>
        
    )
}

export default Dashboard
