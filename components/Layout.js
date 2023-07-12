import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from "../images/logoalcaldia.png"
import corazonW from "../images/corazon-letras blancas.png"
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
            
            <a href='https://www.monterrey-casanare.gov.co/' style={{ position: "fixed", bottom: "2%", right: "2%", zIndex:"1" }}><img src={corazon} width="50px" /></a>
            <Footer />
        </div>
    )
}

export default Layout