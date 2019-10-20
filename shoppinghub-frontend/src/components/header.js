import '../css/header.css'
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Form, NavDropdown, FormControl, Button, NavItem} from 'react-bootstrap'



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signedIn:false
         }
    }
    render() { 
        return ( 
            <div>
                <Navbar className="header"  expand="lg" fixed="top" >
                    <Navbar.Brand  ><span className="webName">Shopping Hub</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbarrowscss justify-content-end" >
                        <Nav className="navscss justify-content-end">
                            <LinkContainer to="/"   ><NavItem className="navitemcss" >Home</NavItem></LinkContainer>
                            {
                                !this.state.signedIn && <LinkContainer to="/signin" ><NavItem className="navitemcss"> Sign In</NavItem></LinkContainer>
                                   
                            }
                            {
                                !this.state.signedIn && <LinkContainer to="/signup"><NavItem className="navitemcss">Sign Up</NavItem></LinkContainer>
                            }
                            <LinkContainer to="/aboutus"   ><NavItem className="navitemcss" >About Us</NavItem></LinkContainer>
                            <LinkContainer to="/contactus"   ><NavItem className="navitemcss" >Contact Us</NavItem></LinkContainer>
                            <LinkContainer to="/returnpolicy"   ><NavItem className="navitemcss" >Return  Policy</NavItem></LinkContainer>
                            
                        </Nav>
                        <Nav className='navbarsearchform justify-content-start'>
                         <Form className="navsearchform" >
                            <FormControl type="text" placeholder="Product Name" className="navseachinput mr-sm-2" />
                            <Button className="navsearchbutton" >Search</Button>
                        </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div> 
        );
    }
}
 
export default Header;