import React from 'react'
import { Modal } from 'react-bootstrap'
import Comercio from '../components/Comercio'
import { comercios } from '../images/data'

const Empresas = () => {
  return (
    <div>
      <section className='container wrapper'>

        {comercios.map((element) => <Comercio data={element} />)}
      </section>
    </div>
  )
}

export default Empresas