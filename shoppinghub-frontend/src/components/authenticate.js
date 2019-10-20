import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';



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
        this.checkingUser()
    }

    checkingUser() {
        const token = localStorage.getItem('autt')
        console.log(token)
    }


    render() {

       return(
           <div></div>
       )
    }
}

function mapStateToProps(state) {

    return {
      
    };
}

export default withRouter(connect(mapStateToProps, {  })(Authenticate));