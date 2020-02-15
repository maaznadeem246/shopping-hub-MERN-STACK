import { SELLERPROFILE_R_RECIVED, SELLERPROFILE_ERROR, UPDATESELLERPROFILE_ERROR,UPDATESELLERPROFILE_R_RECIVED } from '../constants/constants'
import { api } from "./apiDetails"

export  const sellerProfileApi = async (dispatch, token) => {
    try{
        const getSellerProfile = await fetch(`${api}/profile`,{method:'GET', headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }})
        const jsonData = await getSellerProfile.json()
        //await console.log(jsonData)
    
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



// this function will hit the seller profile api update 

export const updateSellerProfileApi = async (dispatch, token, data) => {
    try {
        const updateSellerProfile = await fetch(`${api}/profile/saveprofile`, {
            method: 'PUT', headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }, body: JSON.stringify(data)
        })
        const jsonData = await updateSellerProfile.json()
        await console.log(jsonData)

        if (jsonData.error) {
            console.log(jsonData)
            await dispatch({
                type: UPDATESELLERPROFILE_ERROR,
                payload: jsonData
            })
        } else {
       //     await console.log("in")
            await dispatch({
                type: UPDATESELLERPROFILE_R_RECIVED,
                payload: jsonData
            })
        }
    } catch (er) {
        await console.log(er, "ss")
        //check later for this dispatch
        await dispatch({
            type: UPDATESELLERPROFILE_ERROR,
            payload: `${er}`
        })
    }
}