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

    const [excursionAPI, setExcursionAPI] = useState({})

    useEffect(() => {
        const API_EXCURSION = `http://localhost:3000/api/excursiones/${id}`
        const peticion = fetch(API_EXCURSION)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((excursion) => {
                setExcursionAPI(excursion[0])
            })
            .catch((error) => window.alert(error))
    }, [id])

    const NOMBRE_IMAGEN = excursionAPI.imagen

    const { setListaRutas } = useContext(Context)
    const { listaRutas } = useContext(Context)

    return (
        <div className="detalles">
            <h1>{excursionAPI.nombre}</h1>
            <p>{excursionAPI.servicio}</p>
            <img src={`../images/${NOMBRE_IMAGEN}`} alt={`Imagen de ${excursionAPI.nombre}`} />
            <div className="precio">{`${excursionAPI.precio}€`}</div>
            {
                listaRutas.find(elem => elem.idexcursion == id)
                    ? (<div className="boton eliminar" onClick={() => setListaRutas(listaRutas.filter(elem => elem.idexcursion !== excursionAPI.idexcursion))}>
                        <RemoveIcon />
                        Eliminar de la ruta
                    </div>)
                    : (<div className="boton añadir" onClick={() => setListaRutas([...listaRutas, excursionAPI])}>
                        <AddIcon />Añadir a la ruta
                    </div>)
            }
            <div className="volver">
                <Link to={`/excursiones/${excursionAPI.idzona}`}>
                    <ArrowBackIcon />
                    Volver
                </Link>
            </div>

        </div>
    )
}