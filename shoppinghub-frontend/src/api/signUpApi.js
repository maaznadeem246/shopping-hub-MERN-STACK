import { SIGNUP_USER_R_RECEIVED, SIGNUP_USER_ERROR } from '../constants/constants'

const api = "http://localhost:3001"


const headers = {
 
  'Content-Type': 'application/json'
}

export const signUp = async (dispatch,data) => {
  try{
    //console.log(JSON.stringify(data))
    const signUpIt = await fetch(`${api}/signup`,{method:'POST',headers,body:JSON.stringify(data)})
    const jsonData = await signUpIt.json()
    //await console.log(jsonData)
    if(jsonData.error){
      await dispatch({
        type: SIGNUP_USER_ERROR,
        payload: jsonData.e
      })
    }else{
      await dispatch({
        type:SIGNUP_USER_R_RECEIVED,
        payload:jsonData
      })
    }
  }catch (er){
    //await console.log(er)
    await dispatch({
      type:SIGNUP_USER_ERROR,
      payload:er
    })
  }
}



export default signUp