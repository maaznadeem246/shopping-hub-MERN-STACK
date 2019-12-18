import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';
import {userDetails} from '../actions/userActions'


class Authenticate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token:this.props.token,
            pending:true,
            authproc:true,
        }
    }


    static getDerivedStateFromProps(props, state){
        console.log(props)
        if (state.authproc){
                
                 props.userDetails(props.token)
                return{
                    authproc:false,
                }
        }

        if (props.token == null) {
          //  console.log(props.token)
            props.history.push('/')
            return null;
        }
        

        return {
            pending:props.pending,
        };
    }


    render() {

        const { children, token } = this.props;
        const {pending} = this.state
          //console.log(this.props)
        return (!pending) ? <div>{children}</div> : "showign";

    }
}

function mapStateToProps(state) {
    //console.log(state)
    return {
        token:state.user.userToken,
        pending:state.user.pending,
    };
}

export default withRouter(connect(mapStateToProps, {userDetails})(Authenticate));