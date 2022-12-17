import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Comercio from '../components/Comercio'
import { comercios } from '../images/data'
import logo from "../images/corazon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'


const Empresas = () => {
  const [filtro, setFiltro] = useState("")
  const restaurant = () => setFiltro("comida")
  const salud = () => setFiltro("salud y belleza")
  const entretenimiento = () => setFiltro("entretenimiento")
  const autoservicio = () => setFiltro("autoservicio")
  const borrar = () => setFiltro("")

  return (
    <div>
      <div>
        <main className='preview' id="empresas">
          <div className='overlay'>
            <img src={logo} />
          </div>
        </main>
      </div>
      <div>
        <ul className='filtro'>
          <li><button className='btn btn-primary' onClick={borrar}><h4>Quitar filtros</h4></button></li>
          <li><button onClick={restaurant} className='btn btn-primary'><h4>Restuarante</h4></button></li>
          <li><button onClick={salud} className='btn btn-primary'><h4>Salud y Belleza</h4></button></li>
          <li><button onClick={entretenimiento} className='btn btn-primary'><h4>Entretenimiento</h4></button></li>
          <li><button onClick={autoservicio} className='btn btn-primary'><h4>Autoservicio</h4></button></li>
        </ul>
      </div>
      <section className='container wrapper'>

        {comercios.map((element) => filtro ? filtro == element.categoria ? <Comercio data={element} /> : null : <Comercio data={element} />)}
      </section>
    </div>
  )
}

export default Empresas