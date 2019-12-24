import React, {Component} from 'react';
import SideNav from "./sidenav.js"
import DashboardCom from "./DashboardCom"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { withRouter} from 'react-router-dom';

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
            items: [
                // {
                //     path: '/dashboard/profile', /* path is used as id to check which NavItem is active basically */
                //     name: 'Profile',
                //     css: '',
                //     proiconcss: "profile-solid icon",
                //     key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                // },
                {
                    path: '/dashboard/product',
                    name: 'Products',
                    css: '',
                    proiconcss: "product icon",
                    key: 2
                },
                , {
                    path: '/dashboard/orders',
                    name: 'Orders',
                    css: '',
                    proiconcss: "order icon",
                    key: 3
                }
                , {
                    path: '/dashboard/sales-report',
                    name: 'Sales Report',
                    css: '',
                    proiconcss: "salesReporting icon",
                    key: 4
                },

            ]

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
        const token = localStorage.getItem('autt')
        
        if(props.userD.name == undefined && state.userD == null){
            props.userDetails(token)
        }

        if (props.signedOutUser.signedout) {
            //console.log(props.signedOutUser)
            localStorage.removeItem('autt')   
            props.signedOut();
            props.history.push({ pathname: '/signin' ,state:props.location.pathname})
         }
        
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

        return {
            userD:props.userD
        };
    }

    getPathValueForDash = () => {
        console.log(this.props.match.params.dsb)
        
    }

    componentDidMount(){
  //       this.getPathValueForDash();
    }


    signOut = () => {
        //console.log(this.state.token)
        const token = localStorage.getItem('autt')
        this.props.signOutUser(token)
    }


    render() {
        return (
            <div>
                <div className="paddingCont" ></div>
                <SideNav signOut={this.signOut} name={this.state.userD.name} items={this.state.items} cHam={this.state.cHam} changeHam={this.changeHam}/>
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

export default withRouter(Dashboard);