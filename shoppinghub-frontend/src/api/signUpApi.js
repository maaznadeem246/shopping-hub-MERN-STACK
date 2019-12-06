import { SIGNUP_USER_R_RECEIVED, SIGNUP_USER_ERROR } from '../constants/constants'
import {api} from "./apiDetails"



const headers = { 
  'Content-Type': 'application/json'
}

const signUp = async (dispatch,data) => {
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
    await console.log(er,"ss")
    await dispatch({
      type:SIGNUP_USER_ERROR,
      payload:'Some Problem Occurred'
    })
  }
}



export default signUp