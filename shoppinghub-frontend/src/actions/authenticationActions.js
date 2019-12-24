import { AUTHENTICATION_R_SENT } from '../constants/constants'
import authenticateApi from "../api/authenticateApi"

export const authenticateUser = (data) => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATION_R_SENT,
        })
        
        authenticateApi(dispatch,data)

    }
}   