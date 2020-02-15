
// constants for signing up
const SIGNUP_USER_R_SENT = "SIGNUP_USER_REQUEST_SENT"
const SIGNUP_USER_R_RECEIVED = "SIGNUP_USER_REQUEST_RECEIVED"
const SIGNUP_USER_ERROR = "SIGNUP_USER_ERROR"

// constants for signing in
const SIGNIN_USER_R_SENT = "SIGNIN_USER_R_SENT"
const SIGNIN_USER_R_RECEIVED = "SIGNIN_USER_R_RECEIVED"
const SIGNIN_USER_ERROR = "SIGNIN_USER_ERROR"

// constants for signing out
const SIGNOUT_USER_R_SENT = "SIGNOUT_USER_R_SENT"
const SIGNOUT_USER_R_RECEIVED = "SIGNOUT_USER_R_RECEIVED"
const SIGNOUT_USER_ERROR = "SIGNOUT_USER_ERROR"

// constants for token 
const USER_TOKEN = "USER_TOKEN"

// constants for user details 
const USER_DETAILS_R_SENT = "USER_DETAILS_R_SENT"
const USER_DETAILS_R_RECIEVED = "USER_DETAILS_R_RECIEVED"
const USER_DETAILS_ERROR = "USER_DETAILS_ERROR"

// constants for Atuhentication
const AUTHENTICATION_R_SENT = "AUTHENTICATION_R_SENT"
const AUTHENTICATION_R_RECIVED = "AUTHENTICATION_R_RECIVED"
const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR" 


//constants for Seller Profile
const SELLERPROFILE_R_SENT = "SELLERPROFILE_R_SENT"
const SELLERPROFILE_R_RECIVED = "SELLERPROFILE_R_RECIVED"
const SELLERPROFILE_ERROR = "SELLERPROFILE_ERROR"
const UPDATESELLERPROFILE_R_SENT = "UPDATESELLERPROFILE_R_SENT";
const UPDATESELLERPROFILE_R_RECIVED = "UPDATESELLERPROFILE_R_RECIVED";
const UPDATESELLERPROFILE_ERROR =  "UPDATESELLERPROFILE_ERROR"

export {
        SIGNUP_USER_R_SENT,SIGNUP_USER_R_RECEIVED,SIGNUP_USER_ERROR,
        SIGNIN_USER_R_SENT, SIGNIN_USER_R_RECEIVED, SIGNIN_USER_ERROR,
        SIGNOUT_USER_R_SENT,SIGNOUT_USER_R_RECEIVED,SIGNOUT_USER_ERROR,
        USER_TOKEN,
        USER_DETAILS_R_SENT,
        USER_DETAILS_R_RECIEVED,
        USER_DETAILS_ERROR,
        AUTHENTICATION_R_SENT,
        AUTHENTICATION_R_RECIVED,
        AUTHENTICATION_ERROR,
        SELLERPROFILE_R_SENT,
        SELLERPROFILE_R_RECIVED,
        SELLERPROFILE_ERROR,
        UPDATESELLERPROFILE_R_SENT,
        UPDATESELLERPROFILE_R_RECIVED,
        UPDATESELLERPROFILE_ERROR        
    }