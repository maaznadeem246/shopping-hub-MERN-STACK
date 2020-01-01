import { combineReducers } from 'redux'
import signUpReducer from "./signUpReducer"
import signInReducer from "./signInReducer"
import signOutReducer from "./signOutReducer"
import userReducer from "./userReducer"
import authenticationReducer from "./authenticationReducesr"
import sellerProfileReducer from "./sellerProfileReducer"

const rootReducer = combineReducers({
    signUpUser:signUpReducer,
    signInUser: signInReducer,
    signOutUser:signOutReducer,
    user: userReducer,
    authentication:authenticationReducer,
    sellerProfile:sellerProfileReducer
})

export default rootReducer;