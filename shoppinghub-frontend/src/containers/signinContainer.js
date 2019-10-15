import { connect } from "react-redux"
import Signin from "../components/Signin"
import { signinUser } from "../actions/signInActions"

const mapStateToProps = (state) => {
    return {
        userData: state.signInUser.userData,
        pending: state.signInUser.pending,
        error: state.signInUser.error
    }
}

export default connect(mapStateToProps, { signinUser })(Signin);