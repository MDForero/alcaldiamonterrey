import React from 'react'
import logo from "../images/corazon.png"
import imgprueba from "../images/algarrobos.jpg"
import cachodeoro from "../images/cachodeoro.jpg"
import paraulataDorada from "../images/paraulataDorada.jpg"
import semanaTecnica from "../images/semanaTecnica.jpg"
import adoracionLLanera from "../images/adoracion.jpg"
import festival from "../images/festival.jpg"
import cabalgata from "../images/cabalgata.jpg"

const Blog = () => {
  return (
    <div>
      <main className='preview'>
        <div className='overlay'>
          <img src={logo} />
        </div>
      </main>
      <section className='blogs'>
        <article className='blog'>
          <figure>
            <img src={semanaTecnica} alt="img prueba" width="100%"/>
          </figure>
          <div>
            <h3>SEMANA TÉCNICA</h3>
            <p>Este evento es protagonizado por el instituto educativo Técnico Diversificado, donde se recopilan los hechos trascendentales académicos y pedagógicos, es una semana alegre y colorida que mediante desfiles se desplaza por todo el municipio, en esta se destina un día de exposición de productos resultantes del trabajo de los estudiantes en modalidades como: electricidad, metalistería, dibujo técnico; se realiza además una jornada científica qe demuestra los adelantos en materia de investigación generados por por el instituto educativo; también e lleva a cabo el concurso "El criollito" que consiste en a presentación de muestras típicas del folclor llanero, n este participan los estudiantes de educación básica primaria; los animales también hacen parte de ese evento mediante desfiles y exposiciones qe promueven la tenencia adecuada e mascotas y l bienestar animal. Este evento suele realizarse entre ls meses de septiembre a octubre.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={paraulataDorada} alt="img prueba" width="100%"/>
          </figure>
          <div>
            <h3>PARAULATA DORADA</h3>
            <p>Consiste en un evento que resalta la danza folclórica Colombiana mediante presentaciones culturales que exponen la diversidad cultural de nuestro país, de igual manera se cuenta con presentaciones folclóricas procedentes de otros países; este evento hace parte del contexto institucional de la Escuela Normal Superior, así como la conocida "Semana cultural" la cual se compone por una una jornada de llaneridad que incluye desfiles, comparsas alusivas c los mitos y leyendas tradicionales, joropera con participación de alcance nacional, reinado de la creatividad con su conocido desfile de carrozas que despliegan en un su máximo esplendor las habilidades creativas reflejadas en la decoración, bisutería, y ambientación del marco de este certamen.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={adoracionLLanera} alt="img prueba" width="100%"/>
            <figcaption></figcaption>
          </figure>
          <div>
            <h3>FESTIVAL DE ADORACIÓN LLANERA</h3>
            <p>Evento con 21 años de trayectoria, reúne importantes  nocionales e internacionales del folclor llanero, este es un espectáculo el cual tiene como objetivo principal exaltar el nombre de Dios a traves de conciertos llaneros presentados por niños niños y adultos, se realiza en el mes de diciembre.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={cabalgata} alt="img prueba" width="100%"/>
          </figure>
          <div>
            <h3>LA CEIBA DE ORO</h3>
            <p>Festival que se realiza cada año durante los primeros días del mes de diciembre, en el centro poblado Villacarola esta fiesta con presentaciones artísticas, cabalgata; se realiza principalmente en honor al frondoso árbol de "Ceiba" ubicado en centro del de Villacarola, como ícono de su fundación, dando asi origen al centro poblado; además de ser refugio de gavanes (aves típicas de la región), donde estos posan a anidar sus huevos y posteriormente ven nacer a sus polluelos. En este evento suele rendirse homenaje a personalidades o instituciones que hayan desempeñado un rol relevante para el desarrollo de la región, algunos de estos homenajeados han sido artistas llaneros como Fredy Mora, Pacho Alfonso, y personajes de lo misma comunidad a quienes se les recompensa simbólicamente por sus valiosas contribuciones sociales y culturales.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={cachodeoro} alt="img prueba" width="100%"/>
          </figure>
          <div>
            <h3>El CACHO DE ORO</h3>
            <p>En este evento se conmemora aquel hecho histórico de la entrega de armas del 15 de septiembre de 1953, es por eso que suele realizarse a mediados del mes de septiembre de cada año; durante estas festividades, hombres y mujeres preparan sus monturas para desfilar dentro de una estupenda cabalgata, también se llevan a cabo las tradicionales demostraciones de</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={festival} alt="img prueba" width="100%"/>
          </figure>
          <div>
            <h3>EL FESTIVAL FOLCLORICO CULTURAL, TURISTICO Y DEPORTIVO DEL RIO TUA</h3>
            <p> se celebra desde hace mas de 20 años en las playas del río Túa. Se acostumbra a realizar actividades de deportes y coleo. Además se cuenta con la presentación de grupos musicales de la región, así como de reconocimiento nacional e internacional, folcloristas y diferentes orquestas.</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Blog