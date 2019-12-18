import { connect } from "react-redux"
import Dashboard from "../components/dashboard"
import { userToken, userDetails } from "../actions/userActions"
import {signOutUser, signedOut} from "../actions/signOutActions"


const mapStateToProps = (state) => {
    //console.log(state)
    return {
        userD: state.user.userData,
        pending: state.user.pending,
        // error: state.signUpUser.error,
        signedOuterror: state.signOutUser.error,
        signedOutUser:state.signOutUser.userData,
        userstoken: state.user.userToken
    }
}

export default connect(mapStateToProps, { userToken, signOutUser, signedOut, userDetails })(Dashboard); 