import { SIGNOUT_USER_R_SENT, SIGNOUT_USER_R_RECEIVED, SIGNOUT_USER_ERROR } from "../constants/constants"

const initialState = {
    pending: false,
    userData: {signedout:false},
    error: null,
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNOUT_USER_R_SENT:
            return { ...state, pending: true }
        case SIGNOUT_USER_R_RECEIVED:
            return { ...state, pending: false, userData: action.payload, error: null }
        case SIGNOUT_USER_ERROR:
            return { ...state, pending: false, error: action.payload }
        default:
            return state
    }
}
