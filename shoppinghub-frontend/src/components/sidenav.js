import '../css/dashboard.css'
import React, { Component } from 'react';
import styled from "styled-components"
import {Link, BrowserRouter, Route, Switch, withRouter} from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'






// css for nav items 'NavItem' component
const StyledNavItem = styled.div`
     

    width:100%;
       animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;    
        .profile-solid.icon{
        color: ${(props) => !props.active ? "white" : "#3b945E"};
        }
        .order.icon{
            color: ${(props) => !props.active ? "white" : "#3b945E"};
            :before{
                border-bottom: solid 1.4px ${(props) => props.active ? "white" : "#3b945E"};;
                border-top: solid 1.4px ${(props) => props.active ? "white" : "#3b945E"};;
               
            }
            :after{
                background-color: ${(props) => props.active ? "white" : "#3b945E"};
            }
        }
        
        .salesReporting.icon{
            border: solid 1px #3b945E;
            background-color: ${(props) => !props.active ? "white" : "#3b945E"};
            :before{
                border-right: solid 2px ${(props) => props.active ? "white" : "#3b945E"};
                border-left: solid 2px ${(props) => props.active ? "white" : "#3b945E"};
               
            }
            :after{
                border-right: solid 2px ${(props) => props.active ? "white" : "#3b945E"};;

            }
        }
        .product.icon{
            background-color: ${(props) => !props.active ? "white" : "#3b945E"};
            border: ${(props) => !props.active ? "white" : "#3b945E"};
        }

  a {
    display:inline-flex;

    padding-left:10px;
    font-size: 1.2em;
    
    color: ${(props) => !props.active ? "white" : "#3b945E"};
    
      background-color:${(props) => !props.active ? "#3b945E" : "white"  };
      
        width:inherit;
        border-bottom:1px solid white;

    padding-top:7px;
    padding-bottom:7px;
    transition:0.1s;
    :hover {
      opacity: ${(props) => props.active ? 1 : 0.7  };
              border-bottom:1px solid white;

      text-decoration: none; /* Gets rid of underlining of icons */
    }
    :active 
    } 
  }
`;


// sidenav items
class NavItem extends Component{
    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }
    render(){
        const {active} = this.props;
        //console.log(this.props)
        return(
            <StyledNavItem    active={active}>
                <Link to={this.props.path}  onClick={this.handleClick}>
                    <div className={this.props.cHam ? "sidenavHideLinksCss" : "" }>
                        <div className={this.props.proiconcss}  ></div>
                        <div className="sidnavItemsName">{!this.props.cHam && <span> {this.props.name} </span>}</div> 
                        </div>
                </Link>
            </StyledNavItem>
        )
    }
}


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            cHam:true,

            items: [
                {
                    path: '/dashboard/profile', /* path is used as id to check which NavItem is active basically */
                    name: 'Profile',
                    css: '',
                    proiconcss: "profile-solid icon",
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                }, {
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
    }
    onItemClick = (path) => {
        this.setState({
            activePath:path
        }) 
    }

    changeHam = () => {
        this.setState({
            cHam:!this.state.cHam
        })
    }

    render() {
        const {items, activePath} = this.state
        //console.log(window) 
        return (
            <Container style={{ }} fluid={true}>
                <Row >

                    <Col style={{ padding: 0 }} xs={12} sm={12} md={12}>
                        <div className={this.state.cHam ? "sideNav hideSideNav" : "sideNav"}   >
                        <div style={{width:"100%",display:"flex",flexDirection:"row-reverse"}}>
                                <div  className={!this.state.cHam ? "sidenavHam  change" : "sidenavHam"} style={this.state.cHam ? { marginRight: "auto", marginLeft: "auto" } : {}} onClick={() => this.changeHam()} >
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>       
                        </div>
                            {
                                items.map((item) => {

                                    return (
                                        <NavItem
                                            path={item.path}
                                            name={item.name}
                                            css={item.css}
                                            onItemClick={this.onItemClick}
                                            active={item.path === activePath}
                                            key={item.key}
                                            cHam={this.state.cHam}
                                            proiconcss={item.proiconcss}
                                        />
                                    )
                                })
                            }

                            <StyledNavItem  active={false}>
                                <Link className="signoutlinkcss" onClick={()=> this.props.signOut()} >
                                    <div className={this.state.cHam ? " sidenavHideLinksCss" : ""}>
                                        <div className="export icon"  ></div>
                                        <div className="sidnavItemsName">{!this.state.cHam && <span> Sign out </span>}</div>
                                    </div>
                                </Link>
                            </StyledNavItem>


                        </div>
                       
                    </Col>
                </Row>
                
            </Container>
        )
    }
}


export default withRouter(SideNav);



        //         {
        //           items.map((item) => {
        //               console.log(item.path)
        //               console.log(activePath)
        //               console.log(item.path === activePath)
        //                 return (
        //                      <NavItem 
        //                         path={item.path} 
        //                         name={item.name} 
        //                         css={item.css} 
        //                         onItemClick={this.onItemClick} 
        //                         active={item.path === activePath} 
        //                         key={item.key}
        //                     /> 
        //                 ) 
        //     })
        // }

            