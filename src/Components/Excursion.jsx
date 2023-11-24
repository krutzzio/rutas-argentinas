import "./Excursion.css"

import Context from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom"

import InfoIcon from '@mui/icons-material/Info';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export function Excursion({ info }) {

    const img = require(`../images/${info.imagen}`)

    const { listaRutas } = useContext(Context)
    const { setListaRutas } = useContext(Context)

    const addedRute = listaRutas.find(excursion => {
        return excursion.idexcursion === info.idexcursion
    })

    return (
        <div className="excursion">
            <div>
                <h2>{info.nombre}</h2>
                <p>{info.situacion}</p>
            </div>
            <img src={img} alt={`Imagen destino ${info.nombre}`} />
            <Link className="link" to={`/detalles/${info.idexcursion}`}><InfoIcon /> <span>Más información</span></Link>
            {
                addedRute
                    ? (<div className="rute-in"><AttachFileIcon /><span className="added">Ruta añadida</span></div>)
                    : (<></>)
            }

            {
                listaRutas.some(elem => elem.idexcursion === info.idexcursion)
                    ? (<div className="claseExcursion eliminarExcursion" onClick={() => setListaRutas(listaRutas.filter(elem => elem.idexcursion !== info.idexcursion))}><RemoveIcon /><span className="added">Eliminar Ruta</span></div>)
                    : (<div className="claseExcursion añadirExcursion" onClick={() => setListaRutas([...listaRutas, info])}><AddIcon /><span className="added">Añadir Ruta</span></div>)
            }

        </div>
    )
}