import { Link } from "react-router-dom"
import "./Admin.css"


export function Admin() {


    return (
        <div className="admin-page">
            <h1>ADMINISTRADOR</h1>
            <section className="enlaces">
                <Link to="/admin/lista-rutas"><div className="enlace lista"><span className="nombre-enlace">Lista de rutas</span></div></Link>
                <Link to="/admin/alta"><div className="enlace alta-ruta"><span className="nombre-enlace">Añadir nueva ruta</span></div></Link>
            </section>

        </div>
    )
}