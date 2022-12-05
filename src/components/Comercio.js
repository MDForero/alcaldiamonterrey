import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Carousel, CarouselItem, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Comercio = ({ data }) => {
    const { img, nombre, carousel, ubicacion, redes } = data
    const { instagram, whatsapp, facebook } = redes
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Link variant="primary" onClick={handleShow} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <figure className="figure" >
                    <img src={img} alt={nombre} width="100%" style={{ position: "relative" }} className="img" />
                </figure>
                <h1 style={{ position: "absolute" }}>{nombre}</h1>


            </Link>

            <Modal show={show} onHide={handleClose} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section style={{ height: "200px", overflow: "hidden" }}>
                        <Carousel fade>
                            {carousel.map((element) => <Carousel.Item interval={1000}>
                                <img
                                    className="d-block"
                                    src={element}
                                    height="300px"
                                    width="100%"
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                            </Carousel.Item>)}
                        </Carousel>
                    </section>
                    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", margin: "50px 0px", gap: "10px", textAlign: "justify" }}>
                        <div className='container'>
                            <div className="gap-10">
                                <div className='contorno container'>

                                    <h1>Descripción</h1>
                                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                </div>
                                <div className='contorno container'>
                                    <h2>Horarios de atención</h2>
                                    <dl>
                                        <dt>Lunes-Viernes</dt>
                                        <dl>9:00am - 9:00pm</dl>
                                        <dt>Sabados y Domingos</dt>
                                        <dl>9:00am - 9:00pm</dl>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className='container gap-10'>
                                <div className='contorno container'>
                                    <h2 style={{textAlign:"center"}} >Redes sociales</h2>
                                    <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-around" }}>
                                        <li><a href={facebook}><FontAwesomeIcon icon={faFacebook} size="3x" /></a></li>
                                        <li><a href={instagram}><FontAwesomeIcon icon={faInstagram} size="3x" /></a></li>
                                        <li><a href={whatsapp}><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a></li>
                                    </ul>
                                </div>
                                <div className='contorno'>

                                <iframe  src={ubicacion} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Comercio