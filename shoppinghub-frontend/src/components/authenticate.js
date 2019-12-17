import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';
import {userDetails} from '../actions/userActions'


class Authenticate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token:this.props.token
        }
    }


    static getDerivedStateFromProps(props, state){
        console.log(props)
        if (props.token == null) {
          //  console.log(props.token)
            props.history.push('/')
        }
        

        return null;
    }



    



    render() {

        const { children, token } = this.props;
          //console.log(this.props)
        return (token != null) ? <div>{children}</div> : "showign";

    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        token:state.user.userToken,
        userD:state.user
    };
}

export default withRouter(connect(mapStateToProps, {userDetails})(Authenticate));