import { Routes, Route, Navigate } from 'react-router-dom';

import { Nav } from '../Components/Nav';
import { MainPage } from '../Components/MainPage';
import { Excursiones } from '../Components/Excursiones';
import { Rutas } from '../Components/Rutas';
import { Detalle } from '../Components/Detalle';
import { Alta } from '../Components/Admin/Alta';
import { ListaRutas } from '../Components/Admin/ListaRutas';
import { Admin } from '../Components/Admin/Admin';

export function Router() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/excursiones/:zona' element={<Excursiones />} />
                <Route path='/detalles/:id' element={<Detalle />} />
                <Route path='/ruta' element={<Rutas />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/admin/alta' element={<Alta />} />
                <Route path='/admin/lista-rutas' element={<ListaRutas />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}