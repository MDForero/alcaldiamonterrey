import React from 'react'
import logo from "../images/corazon.png"

const Galeria = () => {
  return (
    <div><main className='preview'>
      <div className='overlay'>
        <img src={logo} />
      </div>
    </main>
    </div>
  )
}

export default Galeria