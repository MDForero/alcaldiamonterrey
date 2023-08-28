import logo from "../../images/corazon.png"
import List from '../../components/List'

export const metadata = {
  title: "Comercios en Monterrey",
  description: "En esta sección encontrarás información sobre los comercios que se encuentran en el municipio de Monterrey, Casanare.",
  keywords:["Comercio en Monterrey", "Autoservicio en Monterrey", "Boutiques en Monterrey", "Carnicerías en Monterrey", "Cafeterías en Monterrey", "Droguerías en Monterrey", "Ferreterías en Monterrey", "Fruterías en Monterrey", "Heladerías en Monterrey", "Hoteles en Monterrey", "Jugueterías en Monterrey", "Librerías en Monterrey", "Panaderías en Monterrey", "Papelerías en Monterrey", "Peluquerías en Monterrey", "Restaurantes en Monterrey", "Supermercados en Monterrey", "Tiendas de ropa en Monterrey", "Tiendas de calzado en Monterrey", "Tiendas de electrodomésticos en Monterrey", "Tiendas de muebles en Monterrey", "Tiendas de tecnología en Monterrey", "Tiendas de deportes en Monterrey", "Tiendas de mascotas en Monterrey", "Tiendas de juguetes en Monterrey", "Tiendas de música en Monterrey", "Tiendas de videojuegos en Monterrey", "Tiendas de regalos en Monterrey", "Tiendas de artesanías en Monterrey", "Tiendas de antigüedades en Monterrey"]
}
const Empresas = () => {

  return (
    <div>
      <div>
        <main className='preview' id="empresas">
          <div className='overlay'>
            <img src={logo} alt="logo"/>
          </div>
        </main>
      </div>
      <List data={"path"}/>
    </div>
  )
}

export default Empresas