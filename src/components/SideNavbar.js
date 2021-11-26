import { BellIcon, UserCircleIcon, CashIcon, LogoutIcon, DocumentSearchIcon } from "@heroicons/react/solid"
import LogoIcon from '../img/pickAxe_logo.svg'
import { Link } from "react-router-dom"

const SideNavbar = () => {
    return (
        <div className='fixed top-0 lef-0 h-screen w-24 flex flex-col content-center
        bg-gpgd shadow-lg'>
            <img className='mt-6 h-14 w-14 mx-auto' src={LogoIcon} alt="" />
            <div className='mt-10 mb-10'>
                <Link to=''>
                    <SideBarIcon text='notification' icon={<BellIcon className='h-8 w-8'/>} />
                </Link>
                <Link to=''>
                    <SideBarIcon text='finance' icon={<CashIcon className='h-8 w-8' />} />
                </Link>
                <Link to='/browse'>
                    <SideBarIcon text='browse wishlist' icon={<DocumentSearchIcon className='h-8 w-8' />} />   
                </Link>
                <Link to=''>
                    <SideBarIcon text='account' icon={<UserCircleIcon className='h-8 w-8' />} />
                </Link>
                
                
                
            </div>
            <SideBarLogOutIcon text='logout' icon={<LogoutIcon className='h-8 w-8' />} />
        </div>
    )
}

const SideBarIcon =({icon, text = 'tooltip'}) => {
    return(
        <div className = 'relative flex items-center justify-center h-12 w-12 text-gpc mx-auto my-5 bg-gray-800 shadow-lg hover:bg-gpc hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear hover:cursor-pointer group'>
            {icon}
            <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-gpcl bg-gray-900 text-base transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

const SideBarLogOutIcon =({icon, text='sign out'}) => {
    return(
        <div className = 'relative flex items-center justify-center h-12 w-12 text-red-500 mx-auto my-5 bg-gray-800 shadow-lg hover:bg-red-500 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear object-bottom hover:cursor-pointer group'>
            {icon}
            <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-red-400 bg-gray-900 text-base transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default SideNavbar
