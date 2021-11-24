import { Link } from 'react-router-dom'

import Button from '../components/Button'
// import Footer from '../components/Footer'
import Footer from '../components/Footer'

import gamingPict from '../img/undraw_gaming_re_cma2.svg'
import checkingImg from '../img/undraw_checking_boxes_re_9h8m.svg'
import logoBig from '../img/logoBig.svg'
import img1 from '../img/homeSrc/1.jpg'
import img2 from '../img/homeSrc/2.jpg'
import img3 from '../img/homeSrc/3.jpg'
import img4 from '../img/homeSrc/4.jpg'
import img5 from '../img/homeSrc/5.jpg'
import img6 from '../img/homeSrc/6.jpg'
import img7 from '../img/homeSrc/7.jpg'
import img8 from '../img/homeSrc/8.jpg'

const Home = () => {

    return (
        <>
        {/* section 1 */}
        <div className="bg-fixed bg-no-repeat bg-cover valhalla grid justify-items-center">
            <div className='text-center text-white md:text-2xl'>
                <img src={logoBig} style={{marginTop:'228px'}} alt='' />
                Manage your money savings plan <br />
                for buying games with us!
                <div className='grid justify-items-center mt-10'>
                    <Link to='/login'>
                        <Button text="Get started" />
                    </Link>
                </div>
            </div>
        </div>


        {/* Section 2 */}
        <div>
        <section className="w-full pt-7 pb-7 md:pt-32 md:pb-32">
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-white border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
            {/* Image */}
            <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <img src={gamingPict} className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " alt='' />
            </div>
            {/* Content */}
            <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Build your wishlist library
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-white border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Build an epic game library for your own good. We will help you organize your money spending.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white rounded-full" style ={{backgroundColor:"#00ADB5"}}>
                      <span className="text-sm font-bold">✓</span>
                    </span> 
                    Maximize savings growth
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white rounded-full" style ={{backgroundColor:"#00ADB5"}}>
                        <span className="text-sm font-bold">✓</span>
                    </span> 
                    Speed past your savings
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white rounded-full" style ={{backgroundColor:"#00ADB5"}}>
                      <span className="text-sm font-bold">✓</span>
                    </span> 
                    Learn the top techniques
                </li>
              </ul>
            </div>
            {/* End  Content */}
          </div>

          <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-white border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
            {/* Content */}
            <div className="box-border w-full text-white border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Why gamePicker?
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-white border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white rounded-full" style ={{backgroundColor:"#00ADB5"}}><span className="text-sm font-bold">✓</span></span> Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white rounded-full" style ={{backgroundColor:"#00ADB5"}}><span className="text-sm font-bold">✓</span></span> Lorem ipsum dolor sit amet
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-white border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white rounded-full" style ={{backgroundColor:"#00ADB5"}}><span className="text-sm font-bold">✓</span></span> Lorem ipsum dolor
                </li>
              </ul>
            </div>
            {/* End  Content */}
            {/* Image */}
            <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <img src={checkingImg} className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" alt='' />
            </div>
          </div>
        </section>
      </div>

        {/* section3 */}
        <div className="justify-items-center text-center text-white pt-10 pb-32">
            <div className="text-5xl" pb-14>
                We have huge game’s price database!
            </div>
            <div className="text-2xl mt-14">
            You can set your wishlist by adding games that you want to buy to increase <br /> your savings spirit!
            </div>
            <div className='container mx-auto px-4 pt-14'>
                <div class="grid grid-cols-4 gap-4 text-white">
                    <div>
                        <img src={img1} alt="" width='95%' />
                    </div>
                    <div>
                        <img src={img2} alt="" width='95%' />
                    </div>
                    <div>
                        <img src={img3} alt="" width='95%' />
                    </div>
                    <div>
                        <img src={img4} alt="" width='95%' />
                    </div>
                    <div>
                        <img src={img5} alt="" width='95%' />
                    </div>
                    <div>
                        <img src={img6} alt="" width='95%' />
                    </div>                    <div>
                        <img src={img7} alt="" width='95%' />
                    </div>
                    <div>
                        <img src={img8} alt="" width='95%' />
                    </div>
                </div>
            </div>
        </div>

        {/* FOOTER */}
        <Footer />
        </>
    )
}

export default Home
