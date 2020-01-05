import React, { Component } from 'react';
import Loading from "../Loading"
import styled from "styled-components"
import { Container, Row, Col, Image } from 'react-bootstrap'
import {getNames} from "country-list"


const StyledFlexContainer = styled.div`

    display:flex;

`

const StyledFlexItem = styled.div`

    

`


const CountriesOptions = () => {
    
    const names = getNames()
    console.log(names)
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
    }

    handleChange(event){
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]:value
        })
    }



    render(){
        console.log(this.state)
        return(
            <Container>
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
                            <input  
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                            />
                            <input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                            />
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>
                            <select
                                onChange={this.handleChange}
                                value={this.state.country}
                                name="country"
                            >
                            <option value="null">Select Your Country</option>
                                <CountriesOptions />
                            </select>
                        </StyledFlexContainer>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StyledFlexContainer>

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