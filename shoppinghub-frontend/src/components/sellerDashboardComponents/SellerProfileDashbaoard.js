import React, { Component } from 'react';
import Loading from "../Loading";
import styled from "styled-components";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {getNames} from "country-list";
import validator from 'validator';

const styles = {
    saveButtonCss:{
        width:150,
        backgroundColor:'#3b945E',
        fontSize:'18px',
        color: 'white',
        border: '1px solid #3b945E',

        // '@media screen and (max-width: 800px)':{
        //     width: '100px'
        // }
    },
    saveButtonDiv:{
            display:"flex",
            justifyContent:'center'
    }
}

const StyledFlexContainer = styled.div`

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    align-content:center;
`

const StyledFlexItem = styled.div`
    
    padding:10px 10px 10px 50px;

    @media all and (max-width: 800px) {
        width:100%;
    }
    
    @media all and (max-width: 500px){
        padding:8px 0px 8px 0px;
        width:100%;
    }


`

const StyledLabel = styled.div`
    font-size:1.3rem;
    padding:10px 0px 10px 0px;
    
    @media all and (max-width: 500px){
        padding:7px 0px 7px 0px;
        font-size:1rem
        width:100%;
    }
`

const StyledInput  = styled.input`

    width:350px;
    border:1.5px solid #646464;
    border-radius: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-right:10px;
    padding-left:10px;




    @media all and (max-width: 800px) {

    }
    
    @media all and (max-width: 500px){
        width:100%;
        font-size:1rem;
    }

`

const StyledSelect = styled.select`
    
    border:1.5px solid #646464;
    border-radius:3px;
    padding:10px 2px 10px 2px;
    background-color:white;
     @media all and (max-width: 500px){
       padding:7px 2px 7px 2px;
        width:100%;
        font-size:1rem;
    }
`

const StyledTextArea = styled.textarea`
    width:470px;
    border:1.5px solid #646464;
    border-radius:2.5px;
    padding:10px 10px 10px 10px;
    background-color:white;
    height:85px;
     @media all and (max-width: 800px){
       padding:7px 2px 7px 2px;
        width:100%;
        height:110px;
        font-size:1rem;
    }

`

const StyledError = styled.div`
    
    padding:3px 3px 3px 3px;
  margin-top:0px;
    font-size: 0.9rem;
    display: none;
`



const CountriesOptions = () => {
    
    const names = getNames()
    
    return names.map(c=>(
                <option value={c.toLowerCase()}>{c}</option>   
            ))
        
}


// This component will show the profile data with in form
class ProfileComponent extends Component{
    constructor(props){
        super(props)
        const {avater, country, address, name, email, account} = this.props.profileDetails
      

        this.state = {
            avater,
            country,
            address,
            name,
            email,
            account,
            saveButton:false,
            mainError:this.props.error,
            error: {
                ername: null,
                ercountry: null,
                eraddress:null,
                ers: null
            },

        }
        this.handleChange = this.handleChange.bind(this)
        this.profileSave = this.profileSave.bind(this)
    }


    handleChange(event){
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]:value,
            saveButton:true
        })
    }

    profileSave(event){
        event.preventDefault();
        const { avater, country, address, name, email, account } = this.state
        const profileDetails = { avater, country, address, name}
         let val = this.validationOfForm()
         if(val){
             this.props.updateProfileFunction(profileDetails)     
         }
        //console.log(this.state)
        //console.log(this.props)
        
    }

    validationOfForm = () => {
        const { avater, country, address,error, name, account } = this.state
        //console.log(name, ' ', email, ' ', password, ' ', confirmPassword, ' ' , account)
        let ru = true
        if (!name.length <= 0) {
            let names = name.trim()

            let nru = names.split(' ').filter(n => {
                return !validator.isAlpha(n)
            })

            if (nru.length != 0) {
                error.ername = "Name should be Alpha"
                ru = false
                //console.log("Name is not Alpha")
            }
        } else {
            ru = false
            error.ername = "Field is required"
            //console.log("Fields are required")
        }



        if(country == 'null') {
            ru = false
            error.ercountry = "Select Country !"
        }


    
        this.setState({
            error,
        })
        return ru
    }


    render(){
     //console.log(this.state)
        return(
            <Container as="form" onSubmit={this.profileSave}   > 
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                {this.state.mainError.error && <div>{this.state.mainError.e} </div>}
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                Avatar
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                <StyledLabel>Name</StyledLabel>
                                <StyledInput  

                                type="text"
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                                />
                                <StyledError style={this.state.error.ername && { background: '#f8d7da', display: 'block' }} className="signUpDF  fade-in text-muted">
                                    {this.state.error.ername && this.state.error.ername}
                                </StyledError>
                               
                            </StyledFlexItem>
                            <StyledFlexItem>
                                <StyledLabel>Email</StyledLabel>
                                <StyledInput    

                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    name="email"
                                />
                                <StyledError></StyledError>
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                <StyledLabel>Country</StyledLabel>
                            <StyledSelect
                               
                                onChange={this.handleChange}
                                value={this.state.country}
                                name="country"
                            >
                            <option value="null">Select Your Country</option>
                            <CountriesOptions />
                            </StyledSelect>
                                <StyledError style={this.state.error.ercountry && { background: '#f8d7da', display: 'block' }} className="fade-in text-muted">
                                    {this.state.error.ercountry && this.state.error.ercountry}
                                </StyledError>
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                <StyledLabel>Address</StyledLabel>
                                <StyledTextArea value={this.state.address} name="address" onChange={this.handleChange} />
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer style={styles.saveButtonDiv}>
                            <StyledFlexItem style={styles.saveButtonDiv}>
                                <Button style={styles.saveButtonCss}  type="submit" disabled={!this.state.saveButton} >
                                    Save 
                                </Button>
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
            </Container>
        )
    }
}



// this is the dashboard  profile component 
class SellerProfileDashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            pending: this.props.sellerProfile.pending ,
            profileDetails: this.props.sellerProfile.profileDetails,
            error: this.props.sellerProfile.error,
            
        }

        this.updateProfile = this.updateProfile.bind(this)
    }


    componentDidMount(){
        //this function will fetch the profile data from the server
        const token = localStorage.getItem("autt") 
        this.props.sellerProfileDetails(token)
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.sellerProfile.pending !== prevProps.sellerProfile.pending) {
            console.log("IN")
            this.setState({
                ...this.props.sellerProfile
            })
        }

        if (this.props.updateSellerProfile.pending !== prevProps.updateSellerProfile.pending) {
            console.log(this.props.updateSellerProfile)
                 this.setState({
                     profileDetails: !this.props.updateSellerProfile.updateProfileDetails
                                     ? this.state.profileDetails 
                                     : this.props.updateSellerProfile.updateProfileDetails.profile,
                     pending: this.props.updateSellerProfile.pending,
                     error: this.props.updateSellerProfile.error,
                })


            
        }
    }

    updateProfile(profileDetails){
        const token = localStorage.getItem("autt") 
      // console.log("s")
      
        this.props.udateSellerProfileDetails(token,profileDetails)
    }


    render(){
        const {pending} = this.state;
        
        if(pending){
            return (
                <div><Loading/></div>
            )    
        }else{
            return (
                <ProfileComponent 
                    updatedSellerDetails={this.props.updateSellerProfile}
                    error={this.state.error}  
                    profileDetails={this.state.profileDetails} 
                    updateProfileFunction={this.updateProfile}
                />
            )
        }
        
    }
}

export default SellerProfileDashboard;