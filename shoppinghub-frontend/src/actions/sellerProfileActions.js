import { SELLERPROFILE_R_SENT, UPDATESELLERPROFILE_R_SENT} from "../constants/constants"
import {sellerProfileApi, updateSellerProfileApi} from "../api/sellerProfileApi"

export const sellerProfileDetails = (token) => {
    return dispatch => {
        dispatch({
            type:SELLERPROFILE_R_SENT
        })
        sellerProfileApi(dispatch,token);
        
    }
}

// this action is dispatched when we will update the profile
export const udateSellerProfileDetails = (token,data) =>{
    return dispatch => {
        dispatch({
            type:UPDATESELLERPROFILE_R_SENT
        })
        console.log("working")
       updateSellerProfileApi(dispatch,token,data);
    }
}

