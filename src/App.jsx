import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Nav } from './Components/Nav';
import { MainPage } from './Components/MainPage';
import { Excursiones } from './Components/Excursiones';
import { Rutas } from './Components/Rutas';
import { Detalle } from './Components/Detalle';

import './App.css';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/excursiones/:zona' element={<Excursiones />} />
          <Route path='/detalles/:id' element={<Detalle />} />
          <Route path='/ruta' element={<Rutas />} />
          <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;