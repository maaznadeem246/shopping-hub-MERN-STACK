import { connect } from "react-redux"
import Signup from "../components/Signup"
import { signupUser } from "../actions/signUpActions"

const mapStateToProps = (state) => {
    return {
        userData: state.signUpUser.userData,
        pending: state.signUpUser.pending,
        error: state.signUpUser.error
    }
}

export default connect(mapStateToProps, { signupUser })(Signup);