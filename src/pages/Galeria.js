import React from 'react'
import logo from "../images/corazon.png"
import galeria from "../images/Galeria/galeria"

const Galeria = () => {
  return (
    <div><main className='preview' id="galeria">
      <div className='overlay'>
        <img src={logo} />
      </div>
    </main>
    <section className='galeria'>
      {galeria.map((element)=><img src={element} className="gallery__img" style={{margin:"0px auto"}}/>)}
    </section>
    </div>
  )
}

export default Galeria