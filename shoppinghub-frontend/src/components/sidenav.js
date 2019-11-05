import React, { Component } from 'react';
import styled from "styled-components"
import {Link, BrowserRouter, Route, Switch, withRouter} from "react-router-dom"




// css of side nav bar 

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
 
  z-index: 1;      /* Stay on top of everything */
  top: 0em;
  left:0em;      /* Stay at the top */
  background-color: #3b945E; 
  overflow-x: hidden;     /* Disable horizontal scroll */
  border-top:2px solid #3b945E;
  border-right:2px solid #3b945E;
  padding-top:10%;
`;


// css for nav items 'NavItem' component
const StyledNavItem = styled.div`
     
  text-align: left; /* Aligns <a> inside of NavIcon div */
    width:270px;
    
  a {
    display:block;

    padding-left:10px;
    font-size: 1.2em;
    color: ${(props) => !props.active ? "white" : "#3b945E"};
  
      background-color:${(props) => !props.active ? "#3b945E" : "white"  };
        width:inherit;
    padding-top:7px;
    padding-bottom:7px;
    :hover {
      opacity: ${(props) => props.active ? 1 : 0.7  };
      text-decoration: none; /* Gets rid of underlining of icons */
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
        console.log(this.props)
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>{this.props.name}</Link>
            </StyledNavItem>
        )
    }
}


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/account/profile', /* path is used as id to check which NavItem is active basically */
                    name: 'Profile',
                    css: '',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/account/dashboard',
                    name: 'Dashboard',
                    css: '',
                    key: 2
                }
                , {
                    path: '/account/products',
                    name: 'Products',
                    css: '',
                    key: 3
                }
            ]
        }
    }
    onItemClick = (path) => {
        this.setState({
            activePath:path
        }) 
    }
    render() {
        const {items, activePath} = this.state
        console.log(this.props) 
        return (
            <StyledSideNav>
                {
                  items.map((item) => {
                      console.log(item.path)
                      console.log(activePath)
                      console.log(item.path === activePath)
                        return (
                             <NavItem 
                                path={item.path} 
                                name={item.name} 
                                css={item.css} 
                                onItemClick={this.onItemClick} 
                                active={item.path === activePath} 
                                key={item.key}
                            /> 
                        ) 
            })
        }

            </StyledSideNav>
        )
    }
}


export default withRouter(SideNav);