import React, { Component } from 'react';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signedUser:undefined
         }
    }

    UNSAFE_componentWillMount(){
        //console.log(this.props.userDetails)
        if(this.props.userDetails.userData.token){
            //console.log('in')
            this.setState({
                signedUser:this.props.userDetails
            })
        }
    }

    render() { 
        return (
                    <div>
                        Home
                    </div>
                

          );
    }
}
 
export default Home;