import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Nav } from './Components/Nav';
import { MainPage } from './Components/MainPage';
import { Excursiones } from './Components/Excursiones';
import { Rutas } from './Components/Rutas';
import { Detalle } from './Components/Detalle';
import { Alta } from './Components/Alta';

import './App.css';
import Provider from './Context/Provider';


function App() {
  return (
    <div className='app'>
      <Provider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/excursiones/:zona' element={<Excursiones />} />
            <Route path='/detalles/:id' element={<Detalle />} />
            <Route path='/ruta' element={<Rutas />} />
            <Route path='/alta' element={<Alta />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;