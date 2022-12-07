import React from 'react'
import { Modal } from 'react-bootstrap'
import Comercio from '../components/Comercio'
import { comercios } from '../images/data'
import logo from "../images/corazon.png"


const Empresas = () => {
  return (
    <div>
      <div>
      <main className='preview' id="empresas">
        <div className='overlay'>
          <img src={logo} />
        </div>
      </main>
    </div>
      <section className='container wrapper'>

        {comercios.map((element) => <Comercio data={element} />)}
      </section>
    </div>
  )
}

export default Empresas