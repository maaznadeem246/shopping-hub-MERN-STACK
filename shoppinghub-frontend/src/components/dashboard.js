import React, {Component} from 'react';
import SideNav from "./sidenav.js"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            token:''
        }

    }
    static getDerivedStateFromProps(props, state){
        console.log(props)
        if (props.userstoken == undefined) {
            props.history.push({ pathname: '/signin' })
            console.log('in')
        }

        if(porps.)

        return {
            token:props.userstoken
        };
    }

    signOut = () => {
        console.log(this.state.token)
        this.props.signOutUser(this.state.token)
    }


    render() {
        return (
            <div>
                <SideNav signOut={this.signOut}/>
            </div>
        )
    }
}

export default Dashboard;