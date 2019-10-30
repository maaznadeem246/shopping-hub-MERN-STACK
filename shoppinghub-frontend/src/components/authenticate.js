import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';



class Authenticate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token:this.props.token
        }
    }


    componentWillMount() {
        
        if (this.props.token != null && this.props.token != undefined ) {
            console.log(this.props.token)
            this.props.history.push('/')
        }

    }

    componentWillReceiveProps(props){
        if (props.token != null && props.token != undefined) {
              console.log(props.token)
            props.history.push('/')
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

export default withRouter(connect(mapStateToProps, {})(Authenticate));