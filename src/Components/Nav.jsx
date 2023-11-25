import { NavLink } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react"
import Context from "../Context/Context"
import SettingsIcon from '@mui/icons-material/Settings';



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
            <NavLink className="admin" to='/admin'><SettingsIcon fontSize="small"/>Admin mode</NavLink>
        </nav>
    )
}