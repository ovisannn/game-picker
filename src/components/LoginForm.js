const LoginForm = () => {

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
                <input type="text" placeholder="Username" className="frm-style" required />
            </div>
            <div className='mt-10'>
                <input type="password" placeholder="Password" className="frm-style" required />
            </div>
            <div className='text-center mt-10'>
                <button type='button' className='btn m-auto' style={btnDetail}>Sign in</button>
            </div>
        </form>
    )
}

export default LoginForm
