import {SIGNUP_USER_R_SENT} from '../constants/constants'
import signUp from '../api/signUpApi'

export const signupUser = (data) => {
    return dispatch => {
        dispatch({
            type:SIGNUP_USER_R_SENT,
        })
        signUp(dispatch,data);
       // console.log(data)   
       }
}


