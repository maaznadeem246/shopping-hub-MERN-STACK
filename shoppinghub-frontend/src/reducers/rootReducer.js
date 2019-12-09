import { combineReducers } from 'redux'
import signUpReducer from "./signUpReducer"
import signInReducer from "./signInReducer"
import signOutReducer from "./signOutReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    signUpUser:signUpReducer,
    signInUser: signInReducer,
    signOutUser:signOutReducer,
    user: userReducer
})

export default rootReducer;