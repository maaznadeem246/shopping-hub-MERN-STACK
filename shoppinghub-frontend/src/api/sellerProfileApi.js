import { SELLERPROFILE_R_RECIVED,SELLERPROFILE_ERROR } from '../constants/constants'
import { api } from "./apiDetails"

const sellerProfileApi = async (dispatch, token) => {
    try{
        const getSellerProfile = await fetch(`${api}/profile`,{method:'GET', headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }})
        const jsonData = await getSellerProfile.json()
        await console.log(jsonData)
    
        if (jsonData.error) {
            console.log(jsonData)
            await dispatch({
                type: SELLERPROFILE_ERROR,
                payload: jsonData.error
            })
        } else {
            await dispatch({
                type: SELLERPROFILE_R_RECIVED,
                payload: jsonData
            })
        }
    }catch(er){
        await console.log(er, "ss")
        //check later for this dispatch
        await dispatch({
            type: SELLERPROFILE_ERROR,
            payload: `${er}`
        })
    }
}

export default sellerProfileApi;