import { NavLink } from "react-router-dom"
import ZONAS from "../Constants/zonas"
import "./Nav.css"


export function Nav() {

    return (
        <nav className="Navbar">
            <NavLink to='/'>Inicio</NavLink>
            {
                ZONAS.map(({ zona, descripcion }) => {
                    return <NavLink key={zona} to={`/excursiones/${zona}`}>{`${descripcion}`}</NavLink>
                })
            }
            <NavLink to='/ruta'>Rutas</NavLink>
        </nav>
    )
}