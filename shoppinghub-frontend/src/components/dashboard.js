import React, {Component} from 'react';
import SideNav from "./sidenav.js"
import DashboardCom from "./DashboardCom"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { withRouter ,Route} from 'react-router-dom';

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
            cHam:true,
            userD:null,
            path:'',
            routesDetails: [
                {
                    path: '/dashboard/products',
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
        console.log(props.userD)
        //console.log(state)
        const token = localStorage.getItem('autt')
        
        //        if(props.userD.name == undefined && state.userD == null){
        if( state.userD == null){
            props.userDetails(token)
        }

        if (props.signedOutUser.signedout) {
            //console.log(props.signedOutUser)
            localStorage.removeItem('autt')   
            props.signedOut();
            props.history.push({ pathname: '/signin' ,state:props.location.pathname})
         }
        if (props.updateUserD){
            if (props.updateUserD.profile != state.userD){
                return {
                    userD: { ...state.userD, name: props.updateUserD.profile.name}
                }
            }
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






    signOut = () => {
        //console.log(this.state.token)
        const token = localStorage.getItem('autt')
        this.props.signOutUser(token)
    }



    render() {
        return (
            <div>
                <div className="paddingCont" ></div>
                <SideNav signOut={this.signOut} name={this.state.userD.name} items={this.state.routesDetails} cHam={this.state.cHam} changeHam={this.changeHam}/>
                <Container fluid>
                    <Row>
                        <Col>
                            <StyledDashboardCom  active={this.state.cHam} >
                                <DashboardCom forupdate={true}   />
                            </StyledDashboardCom>    
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default withRouter(Dashboard);