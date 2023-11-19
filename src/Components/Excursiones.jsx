import { useParams } from "react-router"
import { Excursion } from "./Excursion"
import EXCURSIONES from "../Constants/excursiones"
import ZONAS from "../Constants/zonas"
import "./Excursiones.css"


export function Excursiones() {

    const { zona } = useParams()

    const zonaActual = ZONAS.find(elem => elem.zona === zona)

    const excursionesZona = EXCURSIONES.filter(excursion => excursion.zona === zona)

    return (
        <div className="excursionesComponent">
            <h1>EXCURSIONES</h1>
            <div className="excursiones">
                {excursionesZona.length === 0
                    ? (<h2>No hay excursiones para <span className="zonaActual">{zonaActual.descripcion}</span></h2>)
                    : (excursionesZona.map(info => <Excursion key={info.id} info={info} />)) 
                }
            </div>
        </div>
    )
}