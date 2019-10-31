import { connect } from "react-redux"
import Signup from "../components/Signup"
import { signupUser } from "../actions/signUpActions"
import { userToken } from "../actions/userActions"

const mapStateToProps = (state) => {
    return {
        userData: state.signUpUser.userData,
        pending: state.signUpUser.pending,
        error: state.signUpUser.error,
        userstoken: state.user.userData.token
    }
}

export default connect(mapStateToProps, { signupUser, userToken })(Signup);