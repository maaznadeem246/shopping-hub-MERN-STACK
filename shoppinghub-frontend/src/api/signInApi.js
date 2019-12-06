import { SIGNIN_USER_R_RECEIVED, SIGNIN_USER_ERROR } from '../constants/constants'
import { api } from "./apiDetails"


const headers = {
    'Content-Type': 'application/json'
}


export const signIn = async (dispatch, data) => {
    try {
        //console.log(JSON.stringify(data))
        
        const signInIt = await fetch(`${api}/signin`, { method: 'POST', headers, body: JSON.stringify(data) })
        const jsonData = await signInIt.json()
        //await console.log(jsonData)
        if (jsonData.error) {
            await dispatch({
                type: SIGNIN_USER_ERROR,
                payload: jsonData.e
            })
        } else {
            await dispatch({
                type: SIGNIN_USER_R_RECEIVED,
                payload: jsonData
            })
        }
    } catch (er) {
        await console.log(er, "ss")
        await dispatch({
            type: SIGNIN_USER_ERROR,
            payload: `Some Problem Occurerd`
        })
    }   
}

export default signIn