import EXCURSIONES from "../Constants/excursiones"
import "./Detalle.css"

import { useParams } from "react-router"
import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import { Link } from "react-router-dom"

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function Detalle() {

    const { id } = useParams()
    const excursionDetalle = EXCURSIONES.find((elem) => {
        return elem.id === Number(id)
    })
    const imgDetalle = require(`../images/${excursionDetalle.imagen}`)

    const { setListaRutas } = useContext(Context)
    const { listaRutas } = useContext(Context)

    const [añadido, setAñadido] = useState(listaRutas.some(excursion => {
        return excursion.id === excursionDetalle.id
    }))

    const añadirRuta = () => {
        if (añadido) { setListaRutas(listaRutas.filter(elem => elem !== excursionDetalle)) }
        else if (!añadido) { setListaRutas([...listaRutas, excursionDetalle]) }
        setAñadido(!añadido)
    }

    return (
        <div className="detalles">
            <h1>{excursionDetalle.nombre}</h1>
            <p>{excursionDetalle.servicio}</p>
            <img src={imgDetalle} alt={`Imagen de ${excursionDetalle.nombre}`} />
            <div className="precio">{`${excursionDetalle.precio}€`}</div>
            {
                añadido
                    ? (<div className="boton eliminar" onClick={añadirRuta}>
                        <RemoveIcon />
                        Eliminar de la ruta
                    </div>)
                    : (<div className="boton añadir" onClick={añadirRuta}>
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