import {SIGNUP_USER_R_SENT,SIGNUP_USER_R_RECEIVED,SIGNUP_USER_ERROR} from "../constants/constants"

const initialState = {
    pending:false,
    userData:{},
    error : null,
}

export default function (state = initialState, action){
    switch (action.type) {
        case SIGNUP_USER_R_SENT:
            return {...state, pending:true}
        case SIGNUP_USER_R_RECEIVED:
            return {...state, pending:false, userData:action.payload, error:null }
        case SIGNUP_USER_ERROR:
            return {...state, error:action.payload}
        default:
            return state
    }
}
