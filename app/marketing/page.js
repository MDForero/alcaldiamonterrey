import React from 'react'
import { cursomarketing } from '../../images/data'
import Image from 'next/image'

const Marketing = () => {
  return (
    <div>
      <main className='preview' id="marketing">
      </main>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
        {cursomarketing.map((element) => <Image src={element} alt="" className="marketing-img" />)}
      </div>
    </div>
  )
}

export default Marketing