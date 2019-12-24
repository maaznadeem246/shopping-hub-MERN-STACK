import { AUTHENTICATION_ERROR, AUTHENTICATION_R_RECIVED, AUTHENTICATION_R_SENT } from "../constants/constants"

const initialState = {
    pending: true,
    auth:false,
    error: {statusCode:null},
}

export default function (state = initialState, action) {
    switch (action.type) {
         case AUTHENTICATION_R_SENT:
            return { ...state }
        case AUTHENTICATION_R_RECIVED:
            return { ...state, auth: action.payload, pending: false }
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload, pending: false }
        default:
            return state
    }
}
