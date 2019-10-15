import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signedUser:undefined
         }
    }

    componentWillMount(){
        console.log(this.props.userDetails)
        if(this.props.userDetails.userData.token){
            console.log('in')
            this.setState({
                signedUser:this.props.userDetails
            })
        }
    }

    render() { 
        return (
            <div>
                {this.state.signedUser && 
                    <div>
                        
                    </div>
                 }
            </div>
          );
    }
}
 
export default Home;