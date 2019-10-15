import { SIGNIN_USER_R_SENT, SIGNIN_USER_R_RECEIVED, SIGNIN_USER_ERROR } from "../constants/constants"

const initialState = {
    pending: false,
    userData: {},
    error: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNIN_USER_R_SENT:
            return { ...state, pending: true }
        case SIGNIN_USER_R_RECEIVED:
            return { ...state, pending: false, userData: action.payload, error: null }
        case SIGNIN_USER_ERROR:
            return { ...state, pending: false, userData: {}, error: action.payload }
        default:
            return state
    }
}
