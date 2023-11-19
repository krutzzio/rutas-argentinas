import "./Excursion.css"
import { Link } from "react-router-dom"


export function Excursion({ info }) {

    const img = require(`../images/${info.imagen}`)

    return (
        <div className="excursion">
            <div>
                <h2>{info.nombre}</h2>
                <p>{info.situacion}</p>
            </div>
            <img src={img} alt={`Imagen destino ${info.nombre}`} />
            <Link className="link" to={`/detalles/${info.id}`}><span>Más información</span></Link>
        </div>
    )
}