import React, { Component } from 'react';
import {  Route, withRouter } from 'react-router-dom';
import DashboardProfileContainer from '../containers/sellerProfileDashboardContainer'
import DashboardProductsContainer from '../containers/sellerProductsDashboardContainer'


class DashboardCom extends Component{
    constructor(props){
        super(props)
        this.state={
            forupdate:false
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        // if(nextProps.forupdate != nextState.forupdate){
        //  this.setState({
        //     forupdate: nextProps.forupdate
        //  })   

        console.log(nextProps.match.isExact)
        if (nextProps.match.isExact){
            nextProps.history.push('/dashboard/products')
        }
         
        // }else{
            return false
        //}
    }

    render(){
        //console.log(this.props)
        return(
            <div >
                <Route  path="/dashboard/profile" component={() => (<DashboardProfileContainer />)} />
                <Route  path="/dashboard/products" component={() => (<DashboardProductsContainer/>)} />
                
                <Route  path="/dashboard/orders" component={() => (<div>Orders</div>)} />
                <Route  path="/dashboard/sales-report" component={() => (<div>Sales Reports</div>)} />
                
            </div>
        )
    }

}

export default withRouter(DashboardCom);