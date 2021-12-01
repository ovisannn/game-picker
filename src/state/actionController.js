

export const Login = (username, password) =>{
    return(dispatch) =>{
        dispatch({
            type:'LOGIN',
            payload:{
                un:username,
                pw:password
            }
        }
        )
    }
}