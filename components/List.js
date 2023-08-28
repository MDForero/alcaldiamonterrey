"use client"
import { useState } from 'react'
import { botones, comercios } from '../images/data'
import Comercio from './Comercio'
import ButtonCategory from './ButtonCategory'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const List = () => {
  const [filtro, setFiltro] = useState()

  return (
    <section>
      <section className='max-w-screen-xl mx-auto py-8'>
        <div className='flex -space-x-1 mx-auto justify-center'>
          {botones.map((elmement, index) => (<ButtonCategory item={elmement} key={index} setFiltro={setFiltro} />))}
        </div>
      </section>
      <section className=''>
        <h2 className='text-center text-3xl font-semibold py-8 '>Comercios en Monterrey</h2>
        <div className='flex gap-2 justify-center content-center py-8'>

          {filtro ? <><h2 className='text-center text-3xl font-semibold '>{filtro} </h2><button className='bg-red-600 w-12 h-10 rounded'  onClick={() => setFiltro("")}><FontAwesomeIcon icon={faTrash} className='text-3xl' /> </button></> : ""}
        </div>

        <table className='w-full max-w-screen-xl mx-auto shadow rounded-xl ring'>
          <thead>
            <tr>

              <th>comercio</th>
              <th>telefono</th>
              <th>direccion</th>
              <th>propietario</th>
            </tr>
          </thead>
          <tbody>
            {comercios.map((element, index) => filtro ? filtro === element.categoria ? <Comercio data={element} key={index} /> : null : <Comercio data={element} key={index} />)}
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default List