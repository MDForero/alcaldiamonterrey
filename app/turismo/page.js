import React from 'react'
import logo from "../../images/corazon.png"
import Image from 'next/image'


const Turismo = () => {
  return (
    <div>
      <main className='preview' id="turismo">
        <div className='overlay'>
          <Image src={logo} />
        </div>
      </main>
      <section>

        <article className='turismo' id="tua">
          <div className='overlay-turismo'>
            <div>
              <h3>Río Tua</h3>
              <p>Fuente hídrica representativa de la región, de color cristalino, permitiendo observar los colores de los ecosistemas acuáticos, además de tener caudales tranquilos propicios para su uso como balneario.</p>
            </div>
          </div>
        </article>

        <article className='turismo' id="roca">
          <div className='overlay-turismo'>
            <div>
              <h3>CAÑO LA ROCA</h3>
              <p>Se encuentra dentro del territorio urbano, consiste en la formación bajo una roca de una piscina natural, esta cuenta con infraestructura en guadua, un pequeño puente así como un lugar adecuado construido en piedra, para reuniones recreación y turismo.</p>
            </div>
          </div>
        </article>
        
        <article className='turismo' id="puente">
          <div className='overlay-turismo'>
            <div>
              <h3>PUENTE TABLA</h3>
              <p>Puente colgante que hace porte un reconocido camino real histórico, bajo el puente se encuentra Un fragmento del rio túa, que está colmado de vegetación nativo, nacederos, aguas cristalinos.</p>
            </div>
          </div>
        </article>

        <article className='turismo' id="sol">
          <div className='overlay-turismo'>
            <div>
              <h3>Piedra del sol</h3>
              <p>Mirador natural ubicado en una los puntos más elevados de nuestro municipio, ideal para hacer avistamiento del amanecer llanero, senderismo, excursionismo; así como poro conocer un poco de nuestro historio.</p>
            </div>
          </div>
        </article>

        <article className='turismo' id="pozo">
          <div className='overlay-turismo'>
            <div>
              <h3>POZO DEL AMOR:</h3>
              <p>En medio del espesor del bosque nativo se encuentran las refrescantes aguas cristalinas, presentándose mediante varias cascadas de manera semejante a un tobogán. Es un sitio que permite a los turistas disfrutar de actividades como senderismo, avistamiento de aves, excursionismo, y regocijarse bajo estas encantadoras caídas de agua.</p>
            </div>
          </div>
        </article>

      </section>
    </div>
  )
}

export default Turismo