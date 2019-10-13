import "../css/signup.css";
import React, { Component } from 'react';
import {Container , Row, Col, Form, Button} from "react-bootstrap";
import validator from 'validator';

import {connect} from "react-redux"
import {signupUser} from "../actions/signUpActions"



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            account:'',
            error:{
                ername:null,
                eremail:null,
                erpassword:null,
                erconfirmPassword:null,
                eraccount:null,
                ers:null
            },

        }
    }

    changeHandler = event => {
        //console.log(event.target.value)
        const error = this.state.error
        
        error[`er${event.target.name}`] = null

        this.setState({ [event.target.name]: event.target.value, ['error']:error });
    };

    formSubmit = event => {
        event.preventDefault()
        let val = this.validationOfForm()
        //console.log(val)
        if(val){
            const {name, email, password, account} = this.state
            
            const dat = {
                name, email, password, account
            }
            this.props.signupUser(dat)
            
        }
    }

    componentWillReceiveProps(props){
        //console.log(props)
        const er = this.state.error
        if(props.error){
               this.setState({
                   error:{...er,ers:props.error}
               })
        }
        if(!props.error && !props.pending){
            props.history.push({pathname:'/home'})
        }   
    }


    radioChange = event => {
        //console.log(event.target.value)
        const error = this.state.error
        error[`eraccount`] = null
        this.setState({ account: event.target.value, error})
        
    }

    validationOfForm = () => {
            const {name,email,password,confirmPassword,account,error,registerUser} = this.state
        //console.log(name, ' ', email, ' ', password, ' ', confirmPassword, ' ' , account)
        let ru = true
        if(!name.length <= 0){
        if(!validator.isAlpha(name)){
            error.ername = "Name should be Alpha"
            ru = false
            //console.log("Name is not Alpha")
        }
        }else{
            ru = false
            error.ername = "Field is required"
            //console.log("Fields are required")
        }

        if (!email.length <= 0){
        if(!validator.isEmail(email)){
            ru = false
            error.eremail = "email is not valid"
            //console.log(email)
            }
        }else{
            ru = false
            error.eremail = "Feild is required"  
        }
        
        if (password.length <= 0 ){
            ru = false
            error.erpassword = "Field is required"

        }else{
            if (!(password.length < 10 && password.length >= 6)) {
                ru = false
                error.erpassword = "Value length sould be min 6 and max 10"
               // console.log("Fields are required")
            }
        }

        if(confirmPassword.length <= 0){
            ru = false
            error.erconfirmPassword = "Field is required"
        }else{
            if (!(confirmPassword.length < 10 && confirmPassword.length >= 6)) {
                ru = false
                error.erconfirmPassword = "Value length sould be min 6 and max 10"
               // console.log("Fields are required")
            }
        }
        
        if ((!(confirmPassword === password)) && (confirmPassword.length < 10 && confirmPassword.length >= 6) && (password.length < 10 && password.length >= 6)) {
            ru = false
            error.erconfirmPassword = "Passwords are not same"
           // console.log("Fields are required")
        }

        if(!(account == 'seller' || account == 'customer')){
            ru = false
            error.eraccount = 'Select a value for your account'
          //  console.log("Fields are required")
        }
        
        this.setState({
            error,
        })
        return ru
    }

    render() {
        
        return (
            <div>   
                <Container fluid={true}>
                    <Row>
                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Container>
                                <Row>
                                    <Col>
                                        <Form className="signUpformCss" noValidate onSubmit={this.formSubmit}>
                                            <div className=" signUpCssHead ">
                                                Sign Up
                                        </div>
                                            <Form.Text style={this.state.error.ers && { background: '#f8d7da' }} className="signUpDFS text-muted">
                                                {this.state.error.ers && this.state.error.ers}
                                            </Form.Text>
                                            <div className="signUpformCssf">
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label className="signLabelCss">Name</Form.Label>
                                                <Form.Control 
                                                    className="signUpInput"  
                                                    type="text" 

                                                    onChange={this.changeHandler} 
                                                    value={this.state.name} 
                                                    name="name" 
                                                    />
                                                   
                                                
                                                    <Form.Text style={this.state.error.ername && { background:'#f8d7da'}} className="signUpDF text-muted">
                                                            {this.state.error.ername && this.state.error.ername}
                                                    </Form.Text>
                                                
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        className="signUpInput" 
                                                        type="email" 
                                                        onChange={this.changeHandler} 
                                                        value={this.state.email} 
                                                        name="email"  
                                                        />
                                                
                                                    <Form.Text style={this.state.error.eremail && { background: '#f8d7da' }} className="signUpDF text-muted">
                                                            {this.state.error.eremail && this.state.error.eremail}
                                                    </Form.Text>
                                                
                                            </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                        <Form.Control 
                                                        className="signUpInput"
                                                        type="password" 
                                                        value={this.state.password}
                                                        name="password"
                                                        onChange={this.changeHandler}
                                                    />

                                                    <Form.Text style={this.state.error.erpassword && { background: '#f8d7da' }} className="signUpDF text-muted">
                                                        {this.state.error.erpassword && this.state.error.erpassword}
                                                    </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicConfirmPassword">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control 
                                                    className="signUpInput"
                                                    type="password" 
                                                    value={this.state.confirmPassword}
                                                    name="confirmPassword"
                                                    onChange={this.changeHandler}
                                                />
                                                <Form.Text style={this.state.error.erconfirmPassword && { background: '#f8d7da' }} className="signUpDF text-muted">
                                                        {this.state.error.erconfirmPassword && this.state.error.erconfirmPassword}
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group  >
                                                    <Container fluid={true} style={{ paddingRight: "0px", paddingLeft: "0px" }} >
                                                <Row noGutters={true}>
                                                    <Col>
                                                        <Form.Label>Account</Form.Label>
                                                    </Col>
                                                </Row>
                                                <Row  noGutters={true}>
                                                    <Col>
                                            
           

                                                    <Form.Check
                                                        type="radio"
                                                        name="account"
                                                        value="seller"
                                                        label="Seller"
                                                        id="seller"
                                                        checked={this.state.account === "seller"}
                                                        onChange={this.radioChange}>
                                                    
                                                    </Form.Check>

                                            
                                            </Col>
                                                <Col>
                                                    <Form.Check
                                                        type="radio"
                                                        name='account'
                                                        value="customer"
                                                        label="Customer"
                                                        id='customer'
                                                        checked={this.state.account === "customer"}
                                                        onChange={this.radioChange}>
                                                    </Form.Check>
                                                      </Col>
                                                    
                                            </Row>
                                            <Row>
                                                <Col>
                                                    
                                                        <Form.Text style={this.state.error.eraccount && { background: '#f8d7da' }} className="signUpDF text-muted">
                                                                        {this.state.error.eraccount && this.state.error.eraccount}
                                                        </Form.Text>
                                                    
                                                </Col>
                                            </Row>
                                            </Container>
                                            </Form.Group>
                                            
                                                <Form.Group className="text-center">
                                                    <Button className="signUpSubmitButton "   type="submit">
                                                Register
                                            </Button>
                                                </Form.Group>
                                            </div>
                                        </Form>
                                        
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData:state.signUpUser.userData,
        pending:state.signUpUser.pending,
        error:state.signUpUser.error
    }
}

export default connect(mapStateToProps,{signupUser})(Signup);


