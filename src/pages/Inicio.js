import React from 'react'
import logo from "../images/corazon.png"
import restaurant from "../images/restuarante.png"
import drogueria from "../images/drogueria.png"
import hotel from "../images/hotel.png"
import autoservicio from "../images/autoservicio.jpg"
import ferreteria from "../images/ferreteria.jpg"
import ropa from "../images/almacenesropa .jpg"
import infografia from "../images/infografia.jpg"
import { Link } from 'react-router-dom'
import { Carousel, CarouselItem } from 'react-bootstrap'
import { banners } from '../images/data'
import infografia2 from '../images/infografia2.jpg'
import paso1 from "../images/paso1.jpg"
import paso2 from "../images/paso2.jpg"
import paso3 from "../images/paso3.jpg"
import paso31 from "../images/paso31.jpg"



const [banner, banner1, banner3] = banners

const Inicio = () => {
  return (
    <div>
      <main>
        <Carousel height="70hv" fade>
          <CarouselItem interval={2000}>
            <a href='registro'>
              <img src={banner} width="100%" alt="registrate" />
            </a>
          </CarouselItem>
          <CarouselItem interval={2000}>
            <a href='marketing_digital'>
              <img src={banner1} width="100%" alt="Curso de marketing digital" />
            </a>
          </CarouselItem>
          <CarouselItem interval={2000}>
            <img src={banner3} width="100%" alt="" />
          </CarouselItem>
        </Carousel>
      </main>
      <section className='container grid-store'>
        <div className='g-title'><h1>Categorias destacadas</h1></div>
        <Link className='categorys g1 figure' id='restaurante' to="empresas" state={"comida"}>
          <img src={restaurant} className="img" id="restaurante" />
          <span className="listing-badges">16 establecimientos</span>
        </Link>
        <Link className='categorys g2 figure' id="drogueria" to="empresas" state={"salud y belleza"}>
          <img className='img' src={drogueria} />
          <span className="listing-badges">16 establecimientos</span>
        </Link>
        <Link className='categorys g3 figure' id="hotel" to="empresas" state={"autoservicio"}>
          <img className='img' src={hotel} />
          <span className="listing-badges">16 establecimientos</span>

        </Link>
        <Link className='categorys g4 figure' id="ferreteria" to="empresas" state={"entretenimiento"}>
          <img className='img' src={ferreteria} />
          <span className="listing-badges">16 establecimientos</span>
        </Link>
        <Link className='categorys g5 figure' id="ropa" to="empresas">
          <img className='img' src={ropa} />
          <span className="listing-badges">16 establecimientos</span>
        </Link>
      </section>
      <section className="container margin">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63606.97436451042!2d-72.9239018473618!3d4.866398168616339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad27e37ebea73%3A0x12a98d7eb504b504!2sMonterrey%2C%20Casanare!5e0!3m2!1ses-419!2sco!4v1670015704176!5m2!1ses-419!2sco" width="100%" height="450px" style={{ margin: "50px 0px " }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
        <h3 className='hidden title'>Ruta de formalizaci??n empresarial</h3>
      <section className="container margin">
        <figure style={{ overflow: "hidden" }}>
          <img src={infografia} alt="infografia" width="100%" className='infografia' />
          <figcaption style={{ textAlign: "center" }}><a href="https://cccasanare.co/">C??mara de comercio</a></figcaption>
        </figure>
      </section>
      <section className="container margin">
        <h2 className="title"> Inscripci??n en el fondo emprender </h2>
        <figure style={{ overflow: "hidden" }}>
          <img src={infografia2} alt="infografia" width="100%" className='infografia' />
          <figcaption style={{ textAlign: "center" }}><a href="https://www.fondoemprender.com/"> Fondo emprender</a></figcaption>
        </figure>
      </section>
      <section className='margin'>
        <h2 className="title">Prestamos en el IFC</h2>
        <div className='infografias'>
          <img src={paso1} alt="" width="100%" />
          <img src={paso2} alt="" width="100%" />
          <img src={paso31} alt="" width="100%" />
        </div>
      </section>
    </div>
  )
}

export default Inicio