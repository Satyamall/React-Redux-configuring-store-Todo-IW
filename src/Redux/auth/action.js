

const loginSuccess=(token)=>{
    return{
        type: "LOGIN_SUCCESS",
        payload: token
    }
}

const loginFailure=(err)=>{
   return{
       type: "LOGIN_FAILURE",
       payload: err
   }
}

export {loginSuccess,loginFailure};