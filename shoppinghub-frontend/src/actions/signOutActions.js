import { SIGNOUT_USER_R_SENT, SIGNOUT_USER_R_RECEIVED, SIGNIN_USER_R_RECEIVED, SIGNUP_USER_R_RECEIVED } from '../constants/constants'
import { signOut} from '../api/signOutApi'

export const signOutUser = (data) => {
    return dispatch => {
        dispatch({
            type: SIGNOUT_USER_R_SENT,
        })
        signOut(dispatch, data);
    }
}   


    export const signedOut = () => {
        return dispatch => {
            dispatch({
                type: SIGNOUT_USER_R_RECEIVED,
                payload: {signedout:false}
            })
            dispatch({
                type: SIGNIN_USER_R_RECEIVED,
                payload: { token:null }
            })
            dispatch({
                type: SIGNUP_USER_R_RECEIVED,
                payload: { token: null }
            })
        }
    }