import React from 'react'
import { cursomarketing } from '../images/data'
import logo from "../images/corazon.png"

const Marketing = () => {
  return (
    <div>
      <main className='preview' id="marketing">
      </main>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
        {cursomarketing.map((element) => <img src={element} alt="" className="marketing-img" />)}
      </div>
    </div>
  )
}

export default Marketing