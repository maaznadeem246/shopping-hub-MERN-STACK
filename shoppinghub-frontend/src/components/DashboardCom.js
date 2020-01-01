import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import DashboardProfile from './sellerDashboardComponents/ProfileDashbaoard'


class DashboardCom extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <div >
                <Route path="/dashboard/profile" component={() => (<DashboardProfile />)} />
                <Route path="/dashboard/products" component={() => (<div>Products</div>)} />
                <Route path="/dashboard/orders" component={() => (<div>Orders</div>)} />
                <Route path="/dashboard/sales-report" component={() => (<div>Sales Reports</div>)} />
            </div>
        )
    }

}

export default DashboardCom;