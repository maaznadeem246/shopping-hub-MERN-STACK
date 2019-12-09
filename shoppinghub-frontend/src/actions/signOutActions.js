import { SIGNOUT_USER_R_SENT } from '../constants/constants'
import { signOut} from '../api/signOutApi'

export const signOutUser = (data) => {
    return dispatch => {
        dispatch({
            type: SIGNOUT_USER_R_SENT,
        })
        signOut(dispatch, data);
    }
}   