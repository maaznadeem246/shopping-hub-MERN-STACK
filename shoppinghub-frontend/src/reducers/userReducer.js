import { USER_TOKEN } from "../constants/constants"

const initialState = {
    pending:false,
    userData:{},
    token:null,
    error : null,
}

export default function (state = initialState, action){
    switch (action.type) {
        case USER_TOKEN:
            return {...state,  token : action.token  , pending:true}
        
        default:
            return state
    }
}
