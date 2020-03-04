import { connect } from "react-redux"
import SellerProductsDashboard from "../components/sellerDashboardComponents/SellerProductsDashboard"

// import { userToken, userDetails } from "../actions/userActions"
// import { signOutUser, signedOut } from "../actions/signOutActions"


const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps, {})(SellerProductsDashboard); 