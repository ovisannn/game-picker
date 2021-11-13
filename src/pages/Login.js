import { Link } from 'react-router-dom'

import arrow from '../img/arrow.svg'

import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'


const Login = () => {
    return (
        <div className="container">
            {/* headr */}
            <div className="row">

                <div className="col">
                        <Link to='/'>
                            <Logo />
                        </Link>
                </div>

                <div className="col" style={{textAlign: 'right', paddingTop:'10px'}}>
                    <Link to='/' style={{color:'#EEEEEE', textDecoration: 'none'}}>
                            <img src={arrow} alt="" /> Back to home page
                    </Link>
                </div>

            </div>

            <div className="row" style={{paddingTop:'100px'}}>
                <div style={{textAlign:'center', fontWeight:'400px', fontSize:'72px', fontStyle:'normal', lineWeight:'108px', color:'#00ADB5'}}>
                Sign in
                </div>
                <p style={{textAlign:'center', color:'#EEEEEE', fontStyle:'light'}}>
                Hello there! sign in and start managing <br />
                your money and wishlist!
                </p>
            </div>

                {/* login form */}
            <div className="row" style={{textAlign:'center', paddingTop:'60px'}}>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
