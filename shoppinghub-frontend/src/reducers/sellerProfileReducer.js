import { SELLERPROFILE_R_RECIVED,SELLERPROFILE_R_SENT,SELLERPROFILE_ERROR } from "../constants/constants"

const initialState = {
    pending: false,
    profileDetails: null,
    error: { statusCode: null },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SELLERPROFILE_R_SENT:
            return { ...state,pending:true }
        case SELLERPROFILE_R_RECIVED:
            return { ...state, profileDetails:action.payload, pending: false }
        case SELLERPROFILE_ERROR:
            return { ...state, error: action.payload, pending: false }
        default:
            return state
    }
}
