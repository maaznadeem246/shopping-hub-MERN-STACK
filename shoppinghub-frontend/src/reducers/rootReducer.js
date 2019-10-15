import { combineReducers } from 'redux'
import signUpReducer from "./signUpReducer"
import signInReducer from "./signInReducer"

const rootReducer = combineReducers({
    signUpUser:signUpReducer,
    signInUser: signInReducer
})

export default rootReducer;