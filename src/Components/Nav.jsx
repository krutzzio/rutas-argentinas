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
                zonas.map((item) => {
                    return <NavLink key={item.zona} to={`/excursiones/${item.idzona}`}>{`${item.descripcion}`}</NavLink>
                })
            }
            <NavLink to='/ruta'>Rutas</NavLink>
            <NavLink to='/alta'>Alta Ruta</NavLink>
        </nav>
    )
}