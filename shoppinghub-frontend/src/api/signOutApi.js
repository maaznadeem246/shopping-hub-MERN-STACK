import { SIGNOUT_USER_R_RECEIVED, SIGNOUT_USER_ERROR, USER_TOKEN } from '../constants/constants'
import { api } from "./apiDetails"


const headers = {
    'Content-Type': 'application/json'
}


export const signOut = async (dispatch, data) => {
    try {
        await console.log(data)
        await console.log(JSON.stringify(data))

        const signOutIt = await fetch(`${api}/profile/signout`, { method: 'POST', headers:{
            'Content-Type': 'application/json',
            Authorization:`Bearer ${data}`
        } })
        const jsonData = await signOutIt.json()
        await console.log(jsonData)
        if (jsonData.error) {
            await dispatch({
                type: SIGNOUT_USER_ERROR,
                payload: jsonData.e
            })
        } else {
            await dispatch({
                type: SIGNOUT_USER_R_RECEIVED,
                payload: jsonData
            })
            await dispatch({
                type: USER_TOKEN,
                payload: null,
            })
            await console.log("dispat")
        }
    } catch (er) {
        await console.log(er, "ss")
        await dispatch({
            type: SIGNOUT_USER_ERROR,
            payload: `Some Problem Occurerd`
        })
    }
}

export default signOut;