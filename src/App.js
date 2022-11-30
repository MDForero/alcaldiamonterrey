import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Empresas from './pages/Empresas';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path='empresas' element={<Empresas/>}/>
          <Route path='contacto' element={<Contacto/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
