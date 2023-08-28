import React from 'react'
import logo from "../../images/corazon.png"
import galeria from "../../images/Galeria/galeria"
import Image from 'next/image'

export const metadata = {
  title: 'Monterrey | Galería',
  description: 'En esta sección encontrarás una galería de imágenes del municipio de Monterrey, Casanare.',
  keywords: ["Galería de Monterrey", "Fotos de Monterrey", "Imágenes de Monterrey", "Fotos de Monterrey Casanare", "Imágenes de Monterrey Casanare"]
}


const Galeria = () => {
  return (
    <div><main className='preview' id="galeria">
      <div className='overlay'>
        <Image src={logo} />
      </div>
    </main>
      <section className='galeria'>
        {galeria.map((element) => <Image src={element} className="gallery__img" style={{ margin: "0px auto" }} />)}
      </section>
    </div>
  )
}

export default Galeria