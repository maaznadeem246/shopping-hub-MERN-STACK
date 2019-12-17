import { connect } from "react-redux"
import Signin from "../components/Signin"
import { signinUser } from "../actions/signInActions"
import { userToken } from "../actions/userActions"
const mapStateToProps = (state) => {
    return {
        userData: state.signInUser.userData,
        pending: state.signInUser.pending,
        error: state.signInUser.error,
        userstoken:state.user.userToken
    }
}

export default connect(mapStateToProps, { signinUser, userToken })(Signin);