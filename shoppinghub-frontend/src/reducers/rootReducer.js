import { combineReducers } from 'redux'
import signUpReducer from "./signUpReducer"

const rootReducer = combineReducers({
    signUpUser:signUpReducer
})

export default rootReducer;