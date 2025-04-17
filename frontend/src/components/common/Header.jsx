import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <header>
            <div className="container py-3">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home" className="logo">
                        <span>Izhar</span> Developer
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-link" href="/">
                                Home
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="/about">
                                About Us
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="/services">
                                Services
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="/projects">
                                Projects
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="/blogs">
                                Blogs
                            </Nav.Link>
                            <Nav.Link className="nav-link" href="/contactus">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;