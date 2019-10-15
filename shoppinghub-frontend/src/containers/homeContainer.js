import { connect } from "react-redux"
import Home from "../components/Home"
//import { signinUser } from "../actions/signInActions"

const mapStateToProps = (state) => {
    return {
        userDetails: state.signInUser,
    }
}

export default connect(mapStateToProps, {  })(Home);