import "./Excursion.css"

import Context from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom"

import InfoIcon from '@mui/icons-material/Info';
import AttachFileIcon from '@mui/icons-material/AttachFile';


export function Excursion({ info }) {

    const img = require(`../images/${info.imagen}`)

    const { listaRutas } = useContext(Context)

    const addedRute = listaRutas.includes(info)


    return (
        <div className="excursion">
            <div>
                <h2>{info.nombre}</h2>
                <p>{info.situacion}</p>
            </div>
            <img src={img} alt={`Imagen destino ${info.nombre}`} />
            <Link className="link" to={`/detalles/${info.id}`}><InfoIcon /> <span>Más información</span></Link>
            {
                addedRute
                    ? (<div className="rute-in"><AttachFileIcon /></div>)
                    : <></>
            }
        </div>
    )
}