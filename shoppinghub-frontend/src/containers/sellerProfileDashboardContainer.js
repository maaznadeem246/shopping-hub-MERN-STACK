// this conatiner will provide the state to the ProfileDashboard component

import { connect } from "react-redux"
import ProfileDashboard from "../components/sellerDashboardComponents/SellerProfileDashbaoard"
import {sellerProfileDetails} from "../actions/sellerProfileActions"



const mapStateToProps = (state) => {
    //console.log(state.sellerProfile)
    return {
        sellerProfile:state.sellerProfile
    }
}

export default connect(mapStateToProps, { sellerProfileDetails })(ProfileDashboard); 