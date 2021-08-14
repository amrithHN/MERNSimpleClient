import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export class NavBar extends Component {
    render() {
        return (
            <Container style={{ margin: 0, padding: 0 }}>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ borderRadius: 4, margin: 10 }}>
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand style={{ fontWeight: "Bold", margin: 5 }}>Amrith's Blog</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ margin: 5 }} />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="me-auto" style={{ width: "100vw" }}>
                                <LinkContainer to="/">
                                    <Nav.Link >Posts</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/add">
                                    <Nav.Link >Add Post</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link >About</Nav.Link>
                                </LinkContainer>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </Container>

        )
    }
}

export default NavBar
