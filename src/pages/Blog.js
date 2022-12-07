import React from 'react'
import logo from "../images/corazon.png"
import imgprueba from "../images/algarrobos.jpg"

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
            <img src={imgprueba} alt="img prueba" width="100%"/>
            <figcaption>Hola mundo</figcaption>
          </figure>
          <div>
            <h3>titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={imgprueba} alt="img prueba" width="100%"/>
            <figcaption>Hola mundo</figcaption>
          </figure>
          <div>
            <h3>titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={imgprueba} alt="img prueba" width="100%"/>
            <figcaption>Hola mundo</figcaption>
          </figure>
          <div>
            <h3>titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={imgprueba} alt="img prueba" width="100%"/>
            <figcaption>Hola mundo</figcaption>
          </figure>
          <div>
            <h3>titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={imgprueba} alt="img prueba" width="100%"/>
            <figcaption>Hola mundo</figcaption>
          </figure>
          <div>
            <h3>titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </article>
        <article className='blog'>
          <figure>
            <img src={imgprueba} alt="img prueba" width="100%"/>
            <figcaption>Hola mundo</figcaption>
          </figure>
          <div>
            <h3>titulo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Blog