import { Link } from 'react-router-dom'

import pickAxe from '../img/pickAxe_logo.svg'
import logoBig from '../img/logoBig.svg'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Home = () => {

    return (
        <>
        {/* SESSION-1 */}
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
        {/* SESSION-2 */}
        <div className="grid grid-cols-2">
            <div className='grid justify-items-center pb-32'>
                <img src={pickAxe} alt="" className='mt-32' />
            </div>
            <div className='text-left text-white pt-52'>
                <div>
                    <div className='font-bold text-3xl'>
                        What is gamePicker?
                    </div>
                    <div className='mt-5 text-xl'>
                    gamePicker is a program that can manage your money savings plan in buying games. <br />
                    We also can pick a worth buying games according to your savings progress. <br />
                    You can pick a game for your wishlist to increase your savings spirit.
                    </div>
                </div>
            </div>
        </div>

        {/* SESSION-3 */}
        <div className="justify-items-center text-center text-white pb-32">
            <div className="text-5xl">
                We have huge game’s price database!
            </div>
            <div className="text-3xl mt-8">
            You can set your wishlist by adding games that you want to buy to increase <br /> your savings spirit!
            </div>
            
            {/* harusnya sih pake maps */}
            <div>

            </div>
        </div>

        {/* FOOTER */}
        <Footer />
        </>
    )
}

export default Home
