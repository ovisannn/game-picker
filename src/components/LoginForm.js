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
            <input type="text" placeholder="Username" className="frm-style" required />
            <br /><br />
            <input type="password" placeholder="Password" className="frm-style" required />
            <br /><br /> <br /><br />
            <button type='button' className='btn' style={btnDetail}>Sign in</button>
        </form>
    )
}

export default LoginForm
