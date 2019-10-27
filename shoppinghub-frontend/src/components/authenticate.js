import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';
import {userToken} from "../actions/userActions"


class Authenticate extends Component {

    constructor(props) {
        super(props);
    }


    componentWillMount() {
        
        this.props.userToken();
        if (this.props.token == null || this.props.token == undefined ) {
          //  console.log(this.props.token)
            this.props.history.push('/signin')
        }

    }







    render() {

        const { children, token } = this.props;
        //  console.log(this.props)
        return (token !== null || token !== undefined ) ? <div>{children}</div> : "showign";

    }
}

function mapStateToProps(state) {
   // console.log(state)
    return {
        token:state.user.token
    };
}

export default withRouter(connect(mapStateToProps, { userToken })(Authenticate));