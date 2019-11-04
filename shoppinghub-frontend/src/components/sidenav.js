import React, { Component } from 'react';
import styled from "styled-components"
import {Link, BrowserRouter, Route, Switch, withRouter} from "react-router-dom"




// css of side nav bar 

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 24%;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 0em;
  left:0em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;


// css for nav items 'NavItem' component
const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;


// sidenav items
class NavItem extends Component{
    handleClick = () => {
        const {path, onClick} = this.props;
        onClick(path);
    }
    render(){
        const {active} = this.props;
        console.log(this.props)
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleclick}></Link>
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
                    css: 'fa fa-fw fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/account/dashboard',
                    name: 'Dashboard',
                    css: 'fa fa-fw fa-clock',
                    key: 2
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
                 /*  items.map((item) => {

                        return (
                            { <NavItem 
                                path={item.path} 
                                name={item.name} 
                                css={item.css} 
                                onItemClick={this.onItemClick} 
                                active={item.path === activePath} 
                                key={item.key}
                            /> }
                        ) 
            })*/
        }

            </StyledSideNav>
        )
    }
}


export default withRouter(SideNav);