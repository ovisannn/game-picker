import SideNavbar from "../components/SideNavbar"
import { Tab } from '@headlessui/react'
import { useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const FinanceCard = () =>{
    return(
        <>
        <div className="flex flex-col h-24 w-11/12 bg-gpw mx-5 my-5 rounded-md p-5">
            <div className="flex flex-row justify-between">
                <div className="">
                    <h2 className='font-bold'>27 November 2021</h2>
                </div>
                <div className="">
                    <h2 className='font-bold'>25000</h2>
                </div>
            </div>
            <div>
                tes
            </div>
        </div>

        <div className="flex flex-row justify-between h-24 w-11/12 bg-gpw mx-5 my-5 rounded-md p-5">
            <div className="">
                <h2 className='font-normal'>Say something, I'm giving up on you. I'll be the one, if you want me to</h2>
            </div>
        </div>
        </>
    )
}

const FinanceReport = () =>{
    const class_inActive = 'w-44 h-10 text-gpw bg-gpc hover:bg-gpc m-2 text-center hover:text-gpcl rounded-md font-bold'

    const class_Active = 'w-44 h-10 bg-none border-2 text-gpc border-gpc hover:bg-gpc m-2 text-center hover:text-gpcl rounded-md font-bold'


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
                <div className="bg-gpgd rounded-b-md rounded-tr-md">
                    <Tab.Panels>
                        <Tab.Panel >
                            <FinanceCard />
                        </Tab.Panel>
                        <Tab.Panel>
                            <FinanceCard />
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
