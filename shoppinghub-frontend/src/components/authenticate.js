import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';
import {userDetails} from '../actions/userActions'
import Loading from "./Loading"
import {  signedOut } from "../actions/signOutActions"

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



        if (props.token == null  ) {
          //  console.log(props.token)
            props.history.push('/')
            return null;
        }

        if (props.error != null) {
            localStorage.removeItem('autt')
            props.signedOut();
            props.history.push('/')
            return null;
        }
        

        return {
            pending:props.pending,
            error:props.error
        };
    }


    render() {

        const { children, token } = this.props;
        const {pending, error} = this.state
          //console.log(this.props)
        if (pending){
            return <div style={{ marginTop: "200px" }}> <Loading /></div>
        }else if(!pending && error == null ){
            return <div>{children}</div>
        } else if (!pending && error != null){
            return <div style={{ marginTop: "200px" }}>{error}</div>
        }
       // return (!pending) ? <div>{children}</div> : <div style={{marginTop:"200px"}}>Loading</div>;

    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        token:state.user.userToken,
        pending:state.user.pending,
        error:state.user.error,
    };
}

export default withRouter(connect(mapStateToProps, {userDetails, signedOut})(Authenticate));