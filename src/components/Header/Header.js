import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onTouchEndCapture='/home'>Remedy Academy</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto">
                            <Nav.Link href='/home'>Home</Nav.Link>
                            <Nav.Link href='/services'>Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href='aboutus'>About Us</Nav.Link>
                            <Nav.Link eventKey={2} href='/contact'>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;