import { AUTHENTICATION_R_RECIVED, AUTHENTICATION_ERROR } from '../constants/constants'
import { api } from "./apiDetails"


const authenticateUser = async (dispatch, token) => {
    try {
        
        const getAuthentication= await fetch(`${api}/authentication`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log(getAuthentication)
        const jsonData = await getAuthentication.json()
        
        if(jsonData.error){
            console.log(getAuthentication.status)
            
            await dispatch({
                type:AUTHENTICATION_ERROR ,
                payload: {...jsonData,statusCode:getAuthentication.status}
            })
        }else{
            await dispatch({
                type: AUTHENTICATION_R_RECIVED,
                payload: jsonData
            })
        }
        
    }catch(er){
        await console.log(er, "ss")
        //check later for this dispatch
        await dispatch({
            type: AUTHENTICATION_ERROR,
            payload: `${er}`
        })
    }
}


export default authenticateUser;