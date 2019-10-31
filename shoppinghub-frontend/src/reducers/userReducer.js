import { USER_TOKEN, USER_DETAILS_R_SENT, USER_DETAILS_R_RECIEVED, USER_DETAILS_ERROR } from "../constants/constants"

const initialState = {
    pending:false,
    userData: { token: null},
    error : null,
}

export default function (state = initialState, action){
    switch (action.type) {
        case USER_TOKEN:
            return {...state,  userData:{token:action.payload} }
        case USER_DETAILS_R_SENT:
            return { ...state, pending: true}
        case USER_DETAILS_R_RECIEVED:

            return {...state, userData:{...state.userData,...action.payload},pending:false}
        case USER_DETAILS_ERROR:
            return { ...state, error: action.payload,pending:false}
        default:
            return state
    }
}
