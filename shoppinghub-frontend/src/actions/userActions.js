import { USER_TOKEN, USER_DETAILS_R_SENT,USER_DETAILS_R_RECIEVED, USER_DETAILS_ERROR } from '../constants/constants'


export const userToken = () => {
    const token = localStorage.getItem('autt')
    return {
        type:USER_TOKEN,
        payload:token,
    }
}


export const userDetails = (token) => {
    return dispatch => {
        dispatch({

        })
    }
}

