import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from "../images/logoalcaldia.png"
import corazon from "../images/corazon.png"

const Layout = () => {
    
    return (
        <section>
            <header style={{display:"flex", justifyContent:"center", alignContent:"center", background:"#037ccb"}}>
                <figure style={{width:"400px"}}>
                    <img src={logo} width="100%"/>
                </figure>
            </header>
            <Navbar style={{background:"#037ccb"}} expand="lg" sticky='top'>
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontSize:"2rem" }}
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/" >Inicio</NavLink>
                            <NavLink className="nav-link" to="empresas">Comercio </NavLink>
                            <NavLink className="nav-link" to="contacto">Contacto</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <a href='https://www.monterrey-casanare.gov.co/' style={{position:"fixed", bottom:"2%", right:"2%"}}><img src={corazon} width="50px"/></a>
            <Outlet />

        </section>
    )
}

export default Layout