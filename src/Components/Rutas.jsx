import { useContext } from "react"
import Context from "../Context/Context"
import EXCURSIONES from "../Constants/excursiones"

import "./Rutas.css"


export function Rutas() {

    const { listaRutas } = useContext(Context)

    const excursionsAdded = EXCURSIONES.filter(elem => listaRutas.includes(elem.id))

    const images = excursionsAdded.map(elem => require(`../images/${elem.imagen}`))

    console.log(excursionsAdded)
    return (
        <div className="rutas">
            <h1>RUTAS</h1>
            <div className="lista-rutas">
                {
                    excursionsAdded.map(rutas => {
                        return (
                            <div key={rutas.imagen} >
                                <img src={images} alt="" />
                                <h1>{rutas.nombre}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}