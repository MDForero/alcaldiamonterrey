import React from 'react'
import logo from "../images/corazon.png"
import restaurant from "../images/restuarante.png"
import drogueria from "../images/drogueria.png"
import hotel from "../images/hotel.png"
import autoservicio from "../images/autoservicio.jpg"
import ferreteria from "../images/ferreteria.jpg"
import ropa from "../images/almacenesropa .jpg"
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
      <main className='preview'>
        <div className='overlay'>
          <img src={logo} />
        </div>
      </main>
      <section className='container grid-store'>
        <div className='g-title'><h1>Categorias destacadas</h1></div>
        <Link className='categorys g1 figure' id='restaurante' to="">
          <img src={restaurant} className="img" id="restaurante"/>
        </Link>
        <Link className='categorys g2 figure' id="drogueria" to="">
          <img className='img' src={drogueria} />
        </Link>
        <Link className='categorys g3 figure' id="hotel" to="">
          <img className='img' src={hotel} />

        </Link>
        <Link className='categorys g4 figure' id="ferreteria" to="">
          <img className='img' src={ferreteria} />
        </Link>
        <Link className='categorys g5 figure' id="ropa" to="">
          <img className='img' src={ropa} />
        </Link>
      </section>
    </div>
  )
}

export default Inicio