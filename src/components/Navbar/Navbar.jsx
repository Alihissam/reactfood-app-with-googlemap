import React from 'react'
import './navbar.css';
import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiShoppingCartFill } from 'react-icons/ri';
import { CgSearch } from 'react-icons/cg';



function Basic() {

    return (
        <Navbar className="navbar fixed-top" expand="lg" bg="light">
            <Container>
                <Link className="navbar-brand" to="/#"><img src={logo} alt="logo" style={{ width: '40px', height: "40px" }}></img></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav mx-auto" >
                        <NavHashLink className="nav-link" id='nav' activeclassName="active" exact aria-current="page" to="/#">Home</NavHashLink>
                        <NavHashLink className="nav-link" id='nav' activeclassName="active" exact to="/#about">About</NavHashLink>
                        <NavHashLink className="nav-link" id='nav' activeclassName="active" exact to="/#ourtoppicks">Our Top Picks</NavHashLink>
                        <NavHashLink className="nav-link" id='nav' activeclassName="active" exact to="/#findus">Find Us</NavHashLink>
                    </Nav>
                    <div className="">
                        <CgSearch className="cart-icon" />
                        <RiShoppingCartFill className="cart-icon" />
                        <button type="button" className="button-login">Login</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Basic;


