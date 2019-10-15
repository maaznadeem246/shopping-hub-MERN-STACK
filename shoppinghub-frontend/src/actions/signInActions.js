import { SIGNIN_USER_R_SENT } from '../constants/constants'
import signIn from '../api/signInApi'

export const signinUser = (data) => {
    return dispatch => {
        dispatch({
            type: SIGNIN_USER_R_SENT,
        })
        signIn(dispatch,data);
    }
}   