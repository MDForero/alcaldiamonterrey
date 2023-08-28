import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Card, Carousel,  Modal } from 'react-bootstrap';
import pendiente from "../images/pendiente.jpg"
import Image from 'next/image';

const Comercio = ({ data }) => {
    const { id, categoria, comercio, telefono, direccion, propietario} = data
    let whatsapp = `https://wa.me/+57${telefono}`
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    // id: 1,
    // categoria: "TIENDA DE ROPA",
    // comercio: "MELA BOUTIQUE",
    // telefono: 3125301867,
    // direccion: "Calle 17#5-57 centro",
    // propietario: "Jenniffer Paola Campos"
    return (
        <tr className='text-justify text-lg font-semibold odd:bg-gray-100'>
            <td>{comercio}</td>
            <td>{telefono}</td>
            <td>{direccion}</td>
            <td>{propietario}</td>
            <td className='flex gap-2 text-4xl flex-row-reverse'>
                <a href={`tel:${telefono}`}><FontAwesomeIcon icon={faPhone}/></a>
                <a href={`http://wa.me/+57${telefono}`}><FontAwesomeIcon icon={faWhatsapp}/></a>
            </td>

        </tr>
    )
}

export default Comercio
{/* 
            <Card variant="primary" onClick={handleShow} className="card-negocios">
                <Card.Header style={{height:"70px", display:"flex", justifyContent:"center", alignItems:"center", textTransform:"capitalize"}}>
                    <h5 >{negocio}</h5>
                </Card.Header>
                <figure style={{ overflow: "hidden", borderRadius: "10px", height: "300px" }}>
                    {img ?
                        <Image src={img[0]} alt={negocio} style={{ position: "relative", height: "400px" }} className="img" />
                        : <Image src={pendiente} alt="pendiente" style={{ position: "relative" }} className="img" />

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
                                <Image
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

            </Modal> */}