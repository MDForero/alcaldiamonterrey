import React from 'react'
import logo from "../images/corazon.png"


const Turismo = () => {
  return (
    <div>
      <main className='preview' id="turismo">
        <div className='overlay'>
          <img src={logo} />
        </div>
      </main>
      <section>

        <article className='turismo' id="tua">
          <div className='overlay-turismo'>
            <div>
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </article>

        <article className='turismo' id="roca">
          <div className='overlay-turismo'>
            <div>
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </article>

        <article className='turismo' id="caño">
          <div className='overlay-turismo'>
            <div>
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Turismo