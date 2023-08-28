'use client'
import Image from 'next/image'

const ButtonCategory = ({ item, setFiltro }) => {
    return (
        <button href="empresas/"  className="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500" onClick={()=>setFiltro(item.alt)}>
            <Image className="inline-block h-20 w-20 rounded-full object-cover ring-2 ring-white" src={item.img} alt={item.alt} />
        </button>
    )
}

export default ButtonCategory