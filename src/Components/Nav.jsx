import { NavLink } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react"
import Context from "../Context/Context"


export function Nav() {

    const {zonas} = useContext(Context)

    return (
        <nav className="Navbar">
            <NavLink to='/'>Inicio</NavLink>
            {
                zonas.map(({ zona, descripcion }) => {
                    return <NavLink key={zona} to={`/excursiones/${zona}`}>{`${descripcion}`}</NavLink>
                })
            }
            <NavLink to='/ruta'>Rutas</NavLink>
        </nav>
    )
}