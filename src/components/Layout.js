import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from "../images/logoalcaldia.png"
import corazon from "../images/corazon.png"
import Footer from './Footer'

const Layout = () => {

    return (
        <div>
            <header style={{ display: "flex", justifyContent: "center", alignContent: "center", background: "#037ccb" }}>
                <figure style={{ width: "400px" }}>
                    <img src={logo} width="100%" />
                </figure>
            </header>
            <Navbar bg='primary' expand="lg" sticky='top' variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={corazon} alt="Logo" width="50px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse>


                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ fontSize: "1.5rem" }}
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/" >Inicio</NavLink>
                            <NavLink className="nav-link" to="empresas">Comercio </NavLink>
                            <NavLink className="nav-link" to="contacto">Turismo</NavLink>
                            <NavLink className="nav-link" to="blog">Blog</NavLink>
                            <NavLink className="nav-link" to="galeria">Galería</NavLink>
                            <NavLink className="nav-link" to="registro">Registro comercial</NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <a href='https://www.monterrey-casanare.gov.co/' style={{ position: "fixed", bottom: "2%", right: "2%", zIndex:"1" }}><img src={corazon} width="50px" /></a>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout