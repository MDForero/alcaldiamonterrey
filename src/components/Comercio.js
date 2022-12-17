import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot, faPhone, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Card, Carousel, CarouselItem, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import pendiente from "../images/pendiente.jpg"

const Comercio = ({ data }) => {
    const { img, direccion, descripcion, negocio, celular, redes, ubicacion } = data
    let whatsapp = `https://wa.me/+57${celular}`
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>

            <Card variant="primary" onClick={handleShow} className="card-negocios">
                <Card.Header style={{height:"70px", display:"flex", justifyContent:"center", alignItems:"center", textTransform:"capitalize"}}>
                    <h5 >{negocio}</h5>
                </Card.Header>
                <figure style={{ overflow: "hidden", borderRadius: "10px", height: "300px" }}>
                    {img ?
                        <img src={img[0]} alt={negocio} style={{ position: "relative", height: "400px" }} className="img" />
                        : <img src={pendiente} alt={negocio} style={{ position: "relative" }} className="img" />

                    }
                </figure>
            </Card>


            <Modal show={show} onHide={handleClose} fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>{negocio}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section className='carousel-comercio'>
                        {img ? <Carousel fade>
                            {img.map((element) => <Carousel.Item interval={1000} >
                                <img
                                    className="d-block"
                                    src={element}
                                    
                                    width="100%"
                                    alt=""
                                    style={{ objectFit: "cover", scale:""}}
                                />
                            </Carousel.Item>)}
                        </Carousel> : null}
                    </section>
                    <section className='info-modal responsive'>
                        <div className='container'>
                            <div className="gap-10">
                                {descripcion ?
                                    <div className='contorno container'>
                                        <h1>Acerca de nosotros</h1>
                                        <p>{descripcion}</p>
                                    </div> : null
                                }
                                <div className='contorno container'>

                                    <h2>Contactanos</h2>

                                    <div style={{ display: "grid" }}>
                                        <a href={`tel:${celular}`} ><FontAwesomeIcon icon={faPhone} style={{ margin: "0px 5px" }} />{celular}</a>
                                        {direccion ? <a href={`tel:${direccion}`} ><FontAwesomeIcon icon={faMapLocationDot} style={{ margin: "0px 5px" }} />{direccion}</a> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className='container gap-10'>
                                <div className='contorno container'>
                                    <h2 style={{ textAlign: "center" }} >Redes sociales</h2>
                                    <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-around" }}>
                                        {redes ?
                                            <><li><a href={redes.facebook}><FontAwesomeIcon icon={faFacebook} size="3x" /></a></li>
                                                <li><a href={redes.instagram}><FontAwesomeIcon icon={faInstagram} size="3x" /></a></li></>
                                            : null
                                        }
                                        <li><a href={whatsapp}><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a></li>
                                    </ul>
                                </div>
                                {ubicacion ? <div className='contorno'>
                                    {ubicacion}
                                </div> : null}
                            </div>
                        </div>
                    </section>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Comercio