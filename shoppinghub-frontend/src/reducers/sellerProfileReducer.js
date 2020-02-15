import { SELLERPROFILE_R_RECIVED,SELLERPROFILE_R_SENT,SELLERPROFILE_ERROR,UPDATESELLERPROFILE_R_SENT,UPDATESELLERPROFILE_R_RECIVED,UPDATESELLERPROFILE_ERROR } from "../constants/constants"

const initialStateGetProfile = {
    pending: true,
    profileDetails: null,
    error: { statusCode: null },
}

const initialStateUpdateProfile = {
    pending: false,
    updateProfileDetails: null,
    error: { statusCode: null },
}

// this reducer for get the the profile details
export const sellerProfileReducer = function (state = initialStateGetProfile, action) {
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

// this reducer is for update seller profile

export const updateSellerProfileReducer = function (state = initialStateUpdateProfile, action) {
    switch (action.type) {
        case UPDATESELLERPROFILE_R_SENT:
            console.log("in reducer")
            return { ...state, pending: true }
        case UPDATESELLERPROFILE_R_RECIVED:
            return { ...state, updateProfileDetails: action.payload, pending: false }
        case UPDATESELLERPROFILE_ERROR:
            return { ...state, error: action.payload, pending: false }
        default:
            return state
    }
}



