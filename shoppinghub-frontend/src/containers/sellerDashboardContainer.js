// this conatiner will provide the state to the ProfileDashboard component

import { connect } from "react-redux"
import ProfileDashboard from "../components/sellerDashboardComponents/ProfileDashbaoard"




const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps, { })(ProfileDashboard); 