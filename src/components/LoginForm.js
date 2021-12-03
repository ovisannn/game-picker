import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreator } from '../state/actionIndex'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = ({loginFunc}) => {
    const dispatch = useDispatch()
    // const account = useSelector((state) => state.account)
    const { Login } = bindActionCreators(ActionCreator, dispatch)
    const [getUname, setUname] = useState('')
    const [getPw, setPw] = useState('')

    // console.log(account)
    const btnDetail = {
        borderRadius:'0px',
        fontSize:'24px',
        color:'#EEEEEE',
        width:'166px',
        height:'60px',
        backgroundColor:'#00ADB5',
    }

    return (
        <form action="">
            <div className='mt-10'>
                <input type="text" placeholder="Username" className="frm-style" value={getUname} onChange={(e)=>setUname(e.target.value)} required />
            </div>
            <div className='mt-10'>
                <input type="password" placeholder="Password" className="frm-style" value={getPw} onChange={(e)=>setPw(e.target.value)} required />
            </div>
            <div className='text-center mt-10'>
                <Link to='/dashboard'>
                    <button type='button' className='btn m-auto' style={btnDetail} onClick={()=>{Login(getUname, getPw)}}>Sign in</button>
                </Link>
            </div>
        </form>
    )
}

export default LoginForm
