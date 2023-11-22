import { Routes, Route, Navigate } from 'react-router-dom';

import { Nav } from '../Components/Nav';
import { MainPage } from '../Components/MainPage';
import { Excursiones } from '../Components/Excursiones';
import { Rutas } from '../Components/Rutas';
import { Detalle } from '../Components/Detalle';
import { Alta } from '../Components/Alta';

export function Router() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/excursiones/:zona' element={<Excursiones />} />
                <Route path='/detalles/:id' element={<Detalle />} />
                <Route path='/ruta' element={<Rutas />} />
                <Route path='/alta' element={<Alta />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}