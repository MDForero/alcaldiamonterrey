"use client"
import React from 'react'
import infografia from "../images/actualización/CCC Oficina Monterrey.jpg"
import { Carousel } from 'react-bootstrap'
import { banners, botones } from '../images/data'
import ifcc from '../images/actualización/IFC Banner.jpg'
import Link from 'next/link'
import Image from 'next/image'
import ButtonCategory from '../components/ButtonCategory'



const [banner0, banner1, banner3, banner4] = banners
const slider = [
  {
    id: 1,
    img: banner0,
    href: 'registro',
    alt: 'Guía comercial Monterrey Casanare'
  },
  {
    id: 2,
    img: banner1,
    href: 'empresas',
    alt: 'Comercios inscritos en la guía comercial Monterrey Casanare'
  },
  {
    id: 3,
    img: banner3,
    alt: 'Alcaldía de Monterrey - Casanare'
  },
  {
    id: 3,
    img: banner4,
    alt: 'Punto de información turística Monterrey - Casanare',
    href: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.45809215263122!2d-72.89296004671425!3d4.8843804151883665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1689691272759!5m2!1ses-419!2sco'
  }

]

const page = () => {
  return (
    <div>
      <main>
        <Carousel height="70hv" fade>
          {slider.map(({ id, img, href, alt }) => (
            <Carousel.Item key={id}>
              {href ? <Link href={href}>
                <Image className="d-block w-100" src={img} alt={alt} />
              </Link> : <Image className="d-block w-100" src={img} alt={alt} />}
            </Carousel.Item>))}
        </Carousel>
      </main>
      <section className='md:max-w-screen-2xl w-[100%] mx-auto py-8'>
        <div className='md:max-w-screen-xl w-[95%] shadow mx-auto pb-8 px-2'>

          <h1 className='text-center text-3xl font-semibold py-8 '>¡Bienvenidos a la guía comercial digital del comercio de Monterrey!</h1>
          <div className='max-w-screen-lg mx-auto text-justify text-xl'>
            <p>Esta innovadora estrategia ha sido implementada por la administración municipal "De Corazón por Monterrey" con el valioso apoyo de la red de comerciantes regiomontunos.</p>
            <p>En esta completa guía encontrarán información organizada por categorías sobre una amplia variedad de prestadores de bienes y servicios en el municipio, incluyendo sus datos de contacto y detalles relevantes. Tanto si eres turista como residente, esta guía será de gran utilidad. En nuestra sección de turismo, podrás disfrutar de artículos y una galería fotográfica que destaca las maravillas turísticas de Monterrey, así como los bellos espacios y experiencias que ofrece. Además, no te pierdas ninguno de nuestros emocionantes eventos públicos y privados, consulta nuestra cartelera y únete a la diversión.</p>
            <p>Si eres comerciante y deseas promocionar tu negocio en esta plataforma, no dudes en hacerlo, ¡es completamente gratuito! Esta iniciativa ha sido concebida por la administración municipal, a través de la Secretaría de Desarrollo Económico y Medio Ambiente, con el objetivo de facilitar la promoción y visibilidad de los productos, comercios, empresas y servicios locales para impulsar una economía más sólida y responsable.</p>
            <p>¡Únete a esta emocionante guía comercial digital y se parte del crecimiento económico de Monterrey! Juntos, construimos un futuro próspero para nuestro municipio.</p>
          </div>
        </div>
      </section>
      <section className='max-w-screen-xl mx-auto py-8'>
        <div className='flex -space-x-1 mx-auto justify-center'>
          {botones.map((item, index) => (<ButtonCategory key={index} item={item} />))}
        </div>

      </section>
      <section className="container margin">
        <iframe title='Ubicación de Monterrey' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63606.97436451042!2d-72.9239018473618!3d4.866398168616339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad27e37ebea73%3A0x12a98d7eb504b504!2sMonterrey%2C%20Casanare!5e0!3m2!1ses-419!2sco!4v1670015704176!5m2!1ses-419!2sco" width="100%" height="450px" style={{ margin: "50px 0px " }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <h3 className='hidden title'>Ruta de formalización empresarial</h3>
      <section className="container margin">
        <a href="https://wa.me/+573108056988">
          <figure style={{ overflow: "hidden" }}>
            <Image src={infografia} alt="infografia" className='w-full lg:max-w-4xl lg:mx-auto object-contain' />

          </figure>
        </a>
      </section>
      <section className='margin'>
        <a href='#' className='infografias'>
          <Image src={ifcc} alt="" width="100%" />
        </a>
      </section>
    </div>
  )
}

export default page