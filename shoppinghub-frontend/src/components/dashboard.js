import React, {Component} from 'react';
import SideNav from "./sidenav.js"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            token:'',
            cHam:false,
            userD:null,
            path:this
        }

    }

    changeHam = () => {
        this.setState({
            cHam: !this.state.cHam
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log(props)
        props.userToken();


        if (props.signedOutUser.signedout) {
            console.log(props.signedOutUser)
            localStorage.removeItem('autt')   
            props.signedOut();
            props.history.push('/')
         }
        
        if (props.userstoken == null) {
            props.history.push({ pathname: '/signin' })
            // console.log('in')
        }
        
        

        if(props.usersToken != state.token){

            return {
                token: props.userstoken,
                userD :props.userD.name       
            };
        }

        return null;
    }

    componentDidMount(){
       //    this.props.userDetails(this.state.token)
    }


    signOut = () => {
        console.log(this.state.token)
        this.props.signOutUser(this.state.token)
    }


    render() {
        return (
            <div>
                {console.log(this.props)}
                <SideNav signOut={this.signOut} name={this.state.userD} cHam={this.state.cHam} changeHam={this.changeHam}/>
                                    
            </div>
        )
    }
}

export default Dashboard;