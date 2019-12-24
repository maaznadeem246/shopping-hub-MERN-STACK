import { combineReducers } from 'redux'
import signUpReducer from "./signUpReducer"
import signInReducer from "./signInReducer"
import signOutReducer from "./signOutReducer"
import userReducer from "./userReducer"
import authenticationReducer from "./authenticationReducesr"

const rootReducer = combineReducers({
    signUpUser:signUpReducer,
    signInUser: signInReducer,
    signOutUser:signOutReducer,
    user: userReducer,
    authentication:authenticationReducer
})

export default rootReducer;