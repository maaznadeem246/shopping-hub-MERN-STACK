import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter, Redirect ,Route } from 'react-router-dom';
import {authenticateUser} from '../actions/authenticationActions'
import Loading from "./Loading"


class Authenticate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //token:this.props.token,
            authenticated:false,
            pending:true,
            error: {statusCode: null},
          //  authproc:true,
        }
    }


    static getDerivedStateFromProps(props, state){

        const token = localStorage.getItem('autt')

       // console.log(token)

        if (props.error['statusCode'] == 401) {
            localStorage.removeItem('autt')
            
        }
        
        if (token == null) {
            
            return {
                pending: false,
                authenticated: false
            };
        }else if(!state.authenticated){
            //console.log("in")
            props.authenticateUser(token)
            
        }


        // //console.log(props)
        // if (state.authproc){
                
        //          props.userDetails(props.token)
        //         return{
        //             authproc:false,
        //         }
        // }



        // if (props.token == null  ) {
        //   //  console.log(props.token)
        //     props.history.push('/signin')
        //     return null;
        // }
        // //console.log(props)
        // if (props.error != null && props.signedout) {
        //     localStorage.removeItem('autt')
        //     props.signedOut();
        //     props.history.push('/signin')
        //     return null;
        // }
        

        // return {
        //     pending:props.pending,
        //     error:props.error
        // };

        return {
            pending:props.pending,
            authenticated:props.auth,
            error:props.error
        };
    }



    render() {

        const { children, ...rest } = this.props;
        const {pending, error, authenticated} = this.state
        //  console.log(this.state)
        // if (pending){
        //     return <div style={{ marginTop: "200px" }}> <Loading /></div>
        // }else if(!pending && error == null ){
        //     return <div>{children}</div>
        // } else if (!pending && error != null){
        //     return <div style={{ marginTop: "200px" }}>{error}</div>
        // }
        if (pending  ){
                return <div style={{ marginTop: "200px" }}> <Loading /></div>
            }else{
            return (
                <Route
                    exact={true}
                    {...rest}
                    render={({ location }) =>
                        authenticated  ? (
                            children
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/signin",
                                        state: { from: location, authenticated }
                                    }}
                                />
                            )
                    }
                />
            )

        }

       // return (!pending) ? <div>{children}</div> : <div style={{marginTop:"200px"}}>Loading</div>;

    }
}

function mapStateToProps(state) {
   // console.log(state)
    return {
        auth:state.authentication.auth,
        pending:state.authentication.pending,
        error:state.authentication.error,
    };
}

export default withRouter(connect(mapStateToProps, {authenticateUser})(Authenticate));