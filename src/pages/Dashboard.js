// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SideNavbar from '../components/SideNavbar'



const InputSavings =()=>{
    return(
        <div className="w-4/12 h-auto bg-gpgd shadow-lg ml-24 rounded-lg p-6 mt-24 left-24 transition-all hover:border-4 hover:border-gpc"><h2 className='text-xl font-bold text-gpw'>input income</h2>
            <div className='flex flex-col justify-center '>
                <h2 className='mt-5 text-gpw'>
                How much money do you save?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="number" placeholder='IDR' />
                <h2 className='mt-5 text-gpw'>
                When?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="datetime-local" />
                <h2 className='mt-5 text-gpw'>
                Wanna say something?
                </h2>
                <textarea className="w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear" id="" />
                <div className="h-auto w-2/3 mt-10 border-2 border-gpc hover:border-0 rounded-md hover:bg-gpc transition-all ease-linear text-center font-extrabold text-xl py-4 hover:cursor-pointer text-gpc hover:text-gpcl"> Submit</div>
            </div>
        </div>
    )
}


const InputOutcome =()=>{
    return(
        <div className="w-4/12 h-auto bg-gpgd shadow-lg ml-24 rounded-lg p-6 mt-24 left-24 transition-all hover:border-4 hover:border-gpc"><h2 className='text-xl font-bold text-gpw'>input outcome</h2>
            <div className='flex flex-col justify-center '>
                <h2 className='mt-5 text-gpw'>
                How much money do you spend?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="number" placeholder='IDR' />
                <h2 className='mt-5 text-gpw'>
                When?
                </h2>
                <input className='w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear' type="datetime-local" />
                <h2 className='mt-5 text-gpw'>
                Wanna say something?
                </h2>
                <textarea className="w-2/3 h-10 rounded-md p-3 shadow-md mt-2 hover:w-full transition-all ease-linear" id="" />
                <div className="h-auto w-2/3 mt-10 border-2 border-gpc hover:border-0 rounded-md hover:bg-gpc transition-all ease-linear text-center font-extrabold text-xl py-4 hover:cursor-pointer text-gpc hover:text-gpcl"> Submit</div>
            </div>
        </div>
    )
}

const Dashboard = () => {
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
