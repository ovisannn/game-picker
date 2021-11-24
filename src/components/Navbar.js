import Logo from "./Logo"
import { BellIcon, UserCircleIcon } from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="relative w-full px-8 text-white bgFooter body-font">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
      <a href="#_" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"><Logo /></a>
      <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
        <a href="#_" className="relative font-medium leading-6 text-white transition duration-150 ease-out hover:text-gray-300" xData="{ hover: false }">
          <span className="block">Dashboard</span>
          <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
          </span>
        </a>
        <a href="#_" className="relative font-medium leading-6 text-white transition duration-150 ease-out hover:text-gray-300" xData="{ hover: false }">
          <span className="block">Browse</span>
          <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
          </span>
        </a>
        <a href="#_" className="relative font-medium leading-6 text-white transition duration-150 ease-out hover:text-gray-300" xData="{ hover: false }">
          <span className="block">Saving</span>
          <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
          </span>
        </a>
      </nav>
      
      <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
        {/* <CashIcon classname='h-6 w-6'/> */}
        <BellIcon className='h-6 w-6' />
        
        <Link to ='/profile'>
          <UserCircleIcon className='h-6 w-6' />
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Navbar
