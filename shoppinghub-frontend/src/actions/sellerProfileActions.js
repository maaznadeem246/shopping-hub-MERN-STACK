import {SELLERPROFILE_R_SENT,SELLERPROFILE_R_RECIVED,SELLERPROFILE_ERROR} from "../constants/constants"

export const sellerProfileDetails = (token) => {
    return dispatch => {
        dispatch({
            type:SELLERPROFILE_R_SENT
        })

        
    }
}