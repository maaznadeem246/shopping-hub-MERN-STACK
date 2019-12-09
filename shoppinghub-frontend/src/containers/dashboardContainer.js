import { connect } from "react-redux"
import Dashboard from "../components/dashboard"
import { userToken } from "../actions/userActions"
import {signOutUser} from "../actions/signOutActions"

const mapStateToProps = (state) => {
    return {
        // userData: state.signUpUser.userData,
        // pending: state.signUpUser.pending,
        // error: state.signUpUser.error,
        signOuterror: state.signOutUser.error,
        signOutUser:state.signOutUser.userData,
        userstoken: state.user.userData.token
    }
}

export default connect(mapStateToProps, { userToken, signOutUser })(Dashboard);