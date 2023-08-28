"use client"
import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import logo from "../../images/corazon.png"
import Image from 'next/image'

const RegComercial = () => {
  let nombres, apellidos, descripcion, direccion, negocio, telefono

  const enviar = (e) => {
    console.log(nombres.value)
    e.preventDefault()
    const prueba = document.querySelector("#enviar")
    const whatsapp = `https://api.whatsapp.com/send?phone=573133898130&text=Hola%20${nombres.value}%20${apellidos.value}%20Estoy%20interesado%20en%20el%20registro%20comercial%0A${negocio.value}%0A${telefono.value}%0A${direccion.value}%0A${descripcion.value}`
    prueba.setAttribute("href", whatsapp)
    prueba.click()
  }
  return (
    <div>
      <main className='preview'>
        <div className='overlay'>
          <Image src={logo} />
        </div>
      </main>
      <section>
        <div className='contorno' style={{ display: "flex", margin: "20px auto", flexDirection: "column", justifyContent: "center", width:"fit-content"}}>
          
          <h1 className='btn btn-primary' style={{ minWidth:"75%", alignSelf:"center"}}>Registro comercial</h1>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div className='form'>
              <FloatingLabel
                controlId="floatingInput"
                label="Nombres"

              >
                <Form.Control type="text" placeholder="Nombres" ref={node => nombres = node} />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Apellidos"

              >
                <Form.Control type="text" placeholder="Apellidos" ref={node => apellidos = node} />
              </FloatingLabel>


              <FloatingLabel
                controlId="floatingInput"
                label="Celular"
                >
                <Form.Control type="tel" placeholder="name@example.com"  ref={node => telefono = node}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Dirección">
                <Form.Control type="text" placeholder="Password" ref={node => direccion = node}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Negocio" className='textarea'>
                <Form.Control type="text" placeholder="Password" ref={node => negocio = node}/>
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea2" label="Descripción" className="textarea">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  ref={node => descripcion = node}
                />
              </FloatingLabel>
            </div>
            <div style={{margin:"20px auto"}}>
              <Button variant="danger" onClick={enviar}>Registro comercial</Button>
            </div>
          </form>
          <a id="enviar" href="#" className='display-none'>Hola</a>
        </div>
      </section>
    </div>
  )
}

export default RegComercial