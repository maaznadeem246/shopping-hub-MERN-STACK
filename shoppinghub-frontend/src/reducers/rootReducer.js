import { combineReducers } from 'redux'
import signUpReducer from "./signUpReducer"
import signInReducer from "./signInReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    signUpUser:signUpReducer,
    signInUser: signInReducer,
    user: userReducer
})

export default rootReducer;