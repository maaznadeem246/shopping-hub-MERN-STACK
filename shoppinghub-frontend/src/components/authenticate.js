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
        // //console.log(this.props.signInUsers);
        // if (!this.props.signInUsers) {
        //     //   console.log('d');

        //     this.props.history.push('/login');
        // }
        this.props.userToken();
        console.log(this.props.token)
        if (this.props.token == null) {
            console.log(this.props.token)
            this.props.history.push('/signin')
        }

    }

    componentWillReceiveProps(){
        
    }



    render() {

        const { children, token } = this.props;
        //  console.log(signInUsers)
        return token !== null ? <div>{children}</div> : "showign";

    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        token:state.user.token
    };
}

export default withRouter(connect(mapStateToProps, { userToken })(Authenticate));