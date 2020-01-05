import React, { Component } from 'react';
import Loading from "../Loading"
import styled from "styled-components"
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import {getNames} from "country-list"


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

    }
    
    @media all and (max-width: 500px){
        padding:0px 0px 0px 0px
    }


`

const StyledLabel = styled.div`
    color:red;
`

const StyledInput  = styled.input`

    width:300px;

    @media all and (max-width: 800px) {

    }
    
    @media all and (max-width: 500px){
        width:100%;
    }

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
        }
        this.handleChange = this.handleChange.bind(this)
        this.profileSave = this.profileSave.bind(this)
    }

    handleChange(event){
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]:value
        })
    }

    profileSave(event){
        event.preventDefault();
    }



    render(){
        console.log(this.state)
        return(
            <Container as="form" onSubmit={this.profileSave}   > 
                <Row>
                    <Col>
                        <StyledFlexContainer>
                                Avatar
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
                            </StyledFlexItem>
                            <StyledFlexItem>
                                <StyledLabel>email</StyledLabel>
                                <StyledInput    

                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    name="email"
                                />
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                <StyledLabel>Country</StyledLabel>
                            <select
                                style={{width:"100%"}}
                                onChange={this.handleChange}
                                value={this.state.country}
                                name="country"
                            >
                            <option value="null">Select Your Country</option>
                                <CountriesOptions />
                            </select>
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                <StyledLabel>Address</StyledLabel>
                                <textarea value={this.state.address} name="address" onChange={this.handleChange} />
                            </StyledFlexItem>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <StyledFlexItem>
                                <Button type="submit">
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
class ProfileDashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            pending:true,
            profileDetails: this.props.sellerProfile.profileDetails,
            error: this.props.sellerProfile.error
        }
    }


    componentDidMount(){
        //this function will fetch the profile data from the server
        const token = localStorage.getItem("autt") 
        this.props.sellerProfileDetails(token)
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.sellerProfile.pending !== prevProps.sellerProfile.pending) {
            this.setState({
                ...this.props.sellerProfile
            })
        }
    }



    render(){
        const {pending} = this.state;
        
        if(pending){
            return (
                <div><Loading/></div>
            )    
        }else{
            return (
                <ProfileComponent profileDetails={this.state.profileDetails}/>
            )
        }
        
    }
}

export default ProfileDashboard;