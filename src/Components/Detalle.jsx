import EXCURSIONES from "../Constants/excursiones"

import { useParams } from "react-router"
import { useContext, useState } from "react";
import { Link } from "react-router-dom"

import "./Detalle.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Context from "../Context/Context";


export function Detalle() {

    const { id } = useParams()

    const excursionDetalle = EXCURSIONES.find((elem) => {
        return elem.id === Number(id)
    })
    const imgDetalle = require(`../images/${excursionDetalle.imagen}`)

    const {setListaRutas} = useContext(Context)
    const {listaRutas} = useContext(Context)

    const [añadido, setAñadido] = useState(listaRutas.includes(excursionDetalle.id))

    const añadirRuta = () => {
        setAñadido(!añadido)
        if(añadido) setListaRutas([...listaRutas], excursionDetalle.id)
        else if(!añadido) setListaRutas([...listaRutas], excursionDetalle.id)
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