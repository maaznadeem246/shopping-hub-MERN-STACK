import React, {Component} from 'react';
import SideNav from "./sidenav.js"

class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    static getDerivedStateFromProps(props, state){
        console.log(props)
        if (props.userstoken == undefined) {
            props.history.push({ pathname: '/signin' })
            console.log('in')
        }
        return null;
    }
    render() {
        return (
            <div>
                <SideNav />
            </div>
        )
    }
}

export default Dashboard;