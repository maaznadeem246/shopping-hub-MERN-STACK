import React, { Component } from 'react';
import Loading from "../Loading"

// this is the dashboard  profile component 
class ProfileDashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            pending:true,
            profileDetails: this.props.sellerProfile.profileDetails,
            error: this.props.sellerProfile.error
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     //this function will fetch the profile data from the server 
    //     props.sellerProfileDetails("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZhNjk3NzNmMGU4NjIzZThjZjM3NTIiLCJpYXQiOjE1Nzc4MjM3ODZ9.I-ZEvS_8e2sgnxaiTKKPxzi2Ksj7MAqOlahNxmixwF0")

        
    //     return {
    //         pending: props.sellerProfile.pending,
    //         profileDetails:props.sellerProfile.profileDetails,
    //         error: props.sellerProfile.error 
    //     }
    // }

    componentDidMount(){
        //this function will fetch the profile data from the server 
        this.props.sellerProfileDetails("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZhNjk3NzNmMGU4NjIzZThjZjM3NTIiLCJpYXQiOjE1Nzc4MjM3ODZ9.I-ZEvS_8e2sgnxaiTKKPxzi2Ksj7MAqOlahNxmixwF0")
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.sellerProfile.pending !== prevProps.sellerProfile.pending) {
            this.setState({
                ...this.props.sellerProfile
            })
        }
    }



    render(){
        const {pending} = this.state;
        console.log(this.state)
        if(pending){
            return (
                <div><Loading/></div>
            )    
        }else{
            return (
                <div>Profile</div>
            )
        }
        
    }
}

export default ProfileDashboard;