const user = {
    username:'',
    password:''
}

const reducer = (state = user, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {
                username:action.payload.un,
                password:action.payload.pw
            }
        default:
            return state
    } 
}

export default reducer