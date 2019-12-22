import { AUTHENTICATION_R_SENT } from '../constants/constants'


export const authenticateUser = (data) => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATION_R_SENT,
        })
        
    }
}   