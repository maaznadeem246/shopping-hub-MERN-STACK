import { USER_TOKEN, USER_DETAILS_R_SENT,USER_DETAILS_R_RECIEVED, USER_DETAILS_ERROR } from '../constants/constants'
import userTDetails from "../api/userApi"
// this action creator is just checking the token in local storage and
// then sending to the reducer for use in component
export const userToken = () => {
    const token = localStorage.getItem('autt')
    return {
        type:USER_TOKEN,
        payload:token,
    }
}

// this acition is being used to bring the user data
// through the token we will provide
export const userDetails = (token) => {
    return dispatch => {
        dispatch({
            type: USER_DETAILS_R_SENT
        })

        userTDetails(dispatch,token)
        
    }
}

