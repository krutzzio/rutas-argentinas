import EXCURSIONES from "../Constants/excursiones"

import { useParams } from "react-router"
import { Link } from "react-router-dom"

import "./Detalle.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";


export function Detalle() {

    const { id } = useParams()

    const excursionDetalle = EXCURSIONES.find((elem) => {
        return elem.id === Number(id)
    })

    const imgDetalle = require(`../images/${excursionDetalle.imagen}`)

    const [añadido, setAñadido] = useState(false)

    return (
        <div className="detalles">
            <h1>{excursionDetalle.nombre}</h1>
            <p>{excursionDetalle.servicio}</p>
            <img src={imgDetalle} alt={`Imagen de ${excursionDetalle.nombre}`} />
            <div className="precio">{`${excursionDetalle.precio}€`}</div>
            {
                añadido
                    ? (<div className="boton eliminar" onClick={() => setAñadido(false)}>
                        <RemoveIcon />
                        Eliminar de la ruta
                    </div>)
                    : (<div className="boton añadir" onClick={() => setAñadido(true)}>
                        <AddIcon />Añadir a la ruta
                    </div>)
            }
            <div className="volver">
                <Link to={`/excursiones/${excursionDetalle.zona}`}>
                    <ArrowBackIcon />
                    Volver
                </Link>
            </div>

        </div>
    )
}