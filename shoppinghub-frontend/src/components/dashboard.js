import React, {Component} from 'react';
import SideNav from "./sidenav.js"
import DashboardCom from "./DashboardCom"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"


const StyledDashboardCom = styled.div`


  margin-left:${(props) => props.active ? "6%" : "20%"};
  border:1px solid black;

    @media (max-width: 768px){
        margin-left:14%;
    }


`


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            token:'',
            cHam:false,
            userD:null,
            path:'',

        }
        this.getPathValueForDash = this.getPathValueForDash.bind(this)
    }

    // this function will get the last value from
    // the URL for the dashboard 
    

    changeHam = () => {
        this.setState({
            cHam: !this.state.cHam
        })
    }


    static getDerivedStateFromProps(props, state){
        console.log(props)
        // props.userToken();


        // if (props.signedOutUser.signedout) {
        //     //console.log(props.signedOutUser)
        //     localStorage.removeItem('autt')   
        //     props.signedOut();
        //     props.history.push('/signin')
        //  }
        
        // if (props.userstoken == null) {
        //     props.history.push({ pathname: '/signin' })
        //     // console.log('in')
        // }
        
        

        // if(props.usersToken != state.token){

        //     return {
        //         token: props.userstoken,
        //         userD :props.userD.name       
        //     };
        // }

        return null;
    }

    getPathValueForDash = () => {
        console.log(this.props.match.params.dsb)
        
    }

    componentDidMount(){
         this.getPathValueForDash();
    }


    signOut = () => {
        //console.log(this.state.token)
        this.props.signOutUser(this.state.token)
    }


    render() {
        return (
            <div>
                <div className="paddingCont" ></div>
                <SideNav signOut={this.signOut} name={this.state.userD} cHam={this.state.cHam} changeHam={this.changeHam}/>
                <Container fluid>
                    <Row>
                        <Col>
                            <StyledDashboardCom active={this.state.cHam} >
                                <DashboardCom   />
                            </StyledDashboardCom>    
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Dashboard;