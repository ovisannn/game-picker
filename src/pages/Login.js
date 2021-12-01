import { Link } from 'react-router-dom'
// import { gql, useQuery } from '@apollo/client';
// import { useState } from 'react'; 
import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'


const Login1 = () => { 


    const Yolo =() =>{
        console.log('a')
    }

    
    return (
        <div className="md:container md:mx-auto">
            {/* HEADER */}
            <div className="grid" style={{paddingTop:'30px'}}>
                <div className="flex justify-between">
                    <div>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>

                    <div>
                        <Link to='/' style={{color:'#EEEEEE', textDecoration: 'none'}}>
                            &#8592; Back to home page
                        </Link>
                    </div>
                </div>
            </div>
            {/* login */}
            <div style={{marginTop:'100px'}}>
                <div style={{textAlign:'center', fontWeight:'400px', fontSize:'72px', fontStyle:'normal', lineWeight:'108px', color:'#00ADB5'}}>
                    Sign in
                </div>
                <p style={{textAlign:'center', color:'#EEEEEE', fontStyle:'light'}}>
                    Hello there! sign in and start managing <br />
                    your money and wishlist!
                </p>
            </div>

            <div className='grid justify-items-center mt-10'>
                <LoginForm loginFunc = {Yolo}/>
            </div>
        </div>
    )
}

export default Login1
