import { SIGNIN_USER_R_SENT } from '../constants/constants'

export const signinUser = (data) => {
    return dispatch => {
        dispatch({
            type: SIGNUP_USER_R_SENT,
        })
        
    }
}