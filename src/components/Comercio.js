import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Comercio = ({ data }) => {
    const { img, nombre } = data
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
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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