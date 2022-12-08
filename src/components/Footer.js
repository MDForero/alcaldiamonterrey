import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/corazon.png"

const Footer = () => {
    return (
        <div style={{background:"#037ccb"}}>
            <footer >
                <div>
                    <a><img src={logo} width="100px" style={{background:"white"}} /></a>
                </div>

                <div>
                    <ul>
                        <li><Link to="restaurante" className='nav-link'>Blog</Link></li>
                        <li><Link to="glamping" className='nav-link'>Galeria</Link></li>
                        <li><Link to='' className='nav-link'>Registro</Link></li>
                        <li><Link to='' className='nav-link'>Turismo</Link></li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <li><a href='' className='nav-link'>Políticas de privacidad </a></li>
                        <li><a href='' className='nav-link'>Aviso Legal</a></li>
                        <li><a href='' className='nav-link'>Acerca de las Cookies</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer