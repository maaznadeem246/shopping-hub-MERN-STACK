import React, {Component} from "react";
import styled from "styled-components";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Route, withRouter } from 'react-router-dom';





class SellerProductsDashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return (
            <div>
                Seller Product
                <Route exact path={this.props.match.path+"/addproduct"} component={() => (<div>Add Products</div>)} />
                <Route exact path={this.props.match.path +"/allproducts"} component={() => (<div>All Products</div>)} />
                <Route exact path={this.props.match.path +"/productDetails/:productId"} component={() => (<div>Product Details</div>)} />
            </div>
        )
    }
}

export default withRouter(SellerProductsDashboard);