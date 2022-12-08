import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot, faPhone, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Carousel, CarouselItem, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Comercio = ({ data }) => {
    const {
        negocio,
        img,
        nombre,
        carousel,
        ubicacion,
        redes,
        descripcion,
        horarios,
        telefono,
        locacion
    } = data
    const { instagram, whatsapp, facebook } = redes
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
           
                <Link variant="primary" onClick={handleShow} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <figure style={{overflow:"hidden", borderRadius:"10px"}}>
                        <img src={img} alt={nombre} style={{ position: "relative" }} className="img" />
                    </figure>
                    <h1 style={{ position: "absolute", maxWidth: "300px", color:"white" }}>{negocio}</h1>
                </Link>
            

            <Modal show={show} onHide={handleClose} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>{nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section style={{ height: "300px", overflow: "hidden" }}>
                        <Carousel fade>
                            {carousel.map((element) => <Carousel.Item interval={1000} >
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

                                    <h1>Acerca de nosotros</h1>
                                    <p>{descripcion}</p>
                                </div>
                                <div className='contorno container'>
                                    <h2>Horarios de atención</h2>
                                    <dl>
                                        {/* {Object.keys(horarios).map((element, index) => {
                                            let values = Object.values(horarios)
                                            return <><dt>{element}</dt><dd>{values[index]}</dd></>
                                        })} */}
                                    </dl>
                                </div>
                                <div className='contorno container'>

                                    <h2>Contactanos</h2>

                                    <div style={{ display: "grid" }}>
                                        <a href={`tel:${telefono}`} ><FontAwesomeIcon icon={faPhone} style={{ margin: "0px 5px" }} />{telefono}</a>
                                        <a href={`tel:${locacion}`} ><FontAwesomeIcon icon={faMapLocationDot} style={{ margin: "0px 5px" }} />{locacion}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className='container gap-10'>
                                <div className='contorno container'>
                                    <h2 style={{ textAlign: "center" }} >Redes sociales</h2>
                                    <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-around" }}>
                                        <li><a href={facebook}><FontAwesomeIcon icon={faFacebook} size="3x" /></a></li>
                                        <li><a href={instagram}><FontAwesomeIcon icon={faInstagram} size="3x" /></a></li>
                                        <li><a href={whatsapp}><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a></li>
                                    </ul>
                                </div>
                                <div className='contorno'>

                                    <iframe src={ubicacion} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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