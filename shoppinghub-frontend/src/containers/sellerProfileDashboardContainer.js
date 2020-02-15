// this conatiner will provide the state to the ProfileDashboard component

import { connect } from "react-redux"
import ProfileDashboard from "../components/sellerDashboardComponents/SellerProfileDashbaoard"
import { sellerProfileDetails, udateSellerProfileDetails} from "../actions/sellerProfileActions"



const mapStateToProps = (state) => {
    //console.log(state)
    return {
        sellerProfile:state.sellerProfile,
        updateSellerProfile:state.updateSellerProfile
    }
}

export default connect(mapStateToProps, { sellerProfileDetails, udateSellerProfileDetails })(ProfileDashboard); 