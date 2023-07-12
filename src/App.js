import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Empresas from './pages/Empresas';
import Turismo from './pages/Turismo';
import Blog from './pages/Blog';
import Galeria from './pages/Galeria';
import RegComercial from './pages/RegComercial';
import Marketing from './pages/Marketing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='empresas' element={<Empresas />} />
          <Route path='marketing_digital' element={<Marketing />} />
          <Route path='contacto' element={<Turismo />} />
          <Route path='blog' element={<Blog />} />
          <Route path='galeria' element={<Galeria />} />
          <Route path='registro' element={<RegComercial />} />
        </Route>
        <Route path="*" element={<Inicio/>}/>
      </Routes>
    </div>
  );
}

export default App;
