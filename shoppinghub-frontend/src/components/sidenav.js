
import React, { Component } from 'react';
import styled from "styled-components"
import {Link, BrowserRouter, Route, Switch, withRouter} from "react-router-dom"
import { Container, Row, Col,Image } from 'react-bootstrap'





const ProfileI = styled.div`


  display: inline-block;
  color: whitesmoke;
  position: relative;
  margin-left: 3px;
  margin-top: 40px;
  
  width: ${(props) => props.active ? "19px" : "59px"};
  height:  ${(props) => props.active ? "10px" : "40px"}; 
  border-left: solid 1px currentColor;
  border-right: solid 1px currentColor;
  border-top: solid 1px currentColor;
  border-bottom: solid 1px transparent;
  background-color: currentColor;
  border-radius: 26px 26px 0 0;


:after {
  content: '';
  position: absolute;
  left: ${(props) => props.active ? "2px" : "5px"};;
  top: ${(props) => props.active ? "-10px" : "-50px"};;
  width: ${(props) => props.active ? "12px" : "42px"};;
  height:${(props) => props.active ? "12px" : "42px"};;
  border-radius: 50%;
  border: solid 1px currentColor;
  background-color: currentColor;
}

:before{
  content: '';
  width:${(props) => props.active ? "50px" : "150px"};;
  height:${(props) => props.active ? "50px" : "150px"};;
  z-index:-1;
    position: absolute;
     top:${(props) => props.active ? "-25px" : "-75px"};;
     right:${(props) => props.active ? "-15px" : "-45px"};;
     border-radius: 100%;
  background-color: rgb(212, 212, 212);
}

@media (max-width: 768px){
    :before{
    width:${(props) => props.active ? "40px" : "150px"};
    height:${(props) => props.active ? "40px" : "150px"};
     top:${(props) => props.active ? "-20px" : "-75px"};
     right:${(props) => props.active ? "-10px" : "-45px"};
    }
}


`



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
 
    padding-left:20px;
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
    :active{
         color: ${(props) => !props.active ? "white" : "#3b945E"};
      background-color:${(props) => !props.active ? "#3b945E" : "white"  };
    } 
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
            activePath: this.props.location.pathname,
            cHam:true,

            items: this.props.items
        }
    }
    onItemClick = (path) => {
        this.setState({
            activePath:path
        }) 
    }

    

    render() {
        const {items, activePath} = this.state
        //console.log(window) 
        return (
            <Container style={{ }} fluid={true}>
                <Row >

                    <Col style={{ padding: 0 }} xs={12} sm={12} md={12}>
                        <div className={this.props.cHam ? "sideNav hideSideNav" : "sideNav"}   >
                        <div className="showCham" style={{width:"100%",display:"flex",flexDirection:"row-reverse"}}>
                                <div  className={!this.props.cHam ? "sidenavHam  change" : "sidenavHam"} style={this.props.cHam ? { marginRight: "auto", marginLeft: "auto" } : {}} onClick={() => this.props.changeHam()} >
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>       
                        </div>
                            <Link to='/dashboard/profile' onClick={()=>{this.onItemClick("/dashboard/profile")}} style={this.props.cHam ? { height: "70px" } : { height: "200px"}} className="profileImagediv " >
                                <ProfileI active={this.props.cHam} />
                                {!this.props.cHam && <div className='profilelinkname' > {this.props.name && this.props.name} </div>} 
                                {/* <Image className="profileImage " src={require("../img/test.png")} roundedCircle /> */}
                            </Link>   
                            <div>
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
                                            cHam={this.props.cHam}
                                            proiconcss={item.proiconcss}
                                        />
                                    )
                                })
                            }
                            </div>
                            <StyledNavItem  active={false}>
                                <Link className="signoutlinkcss" onClick={()=> this.props.signOut()} >
                                    <div className={this.props.cHam ? " sidenavHideLinksCss" : ""}>
                                        <div className="export icon"  ></div>
                                        <div className="sidnavItemsName">{!this.props.cHam && <span> Sign out </span>}</div>
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


