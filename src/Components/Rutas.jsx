import { useContext } from "react"
import Context from "../Context/Context"

import "./Rutas.css"
import { Ruta } from "./Ruta"


export function Rutas() {

    const { listaRutas } = useContext(Context)


    let precio = 0

    listaRutas.forEach(rutas => {
        return (
            precio += rutas.precio
        )
    })

    return (
        <div className="rutas">
            <h1>RUTAS</h1>
            <div className="lista-rutas">
                {
                    listaRutas.map(rutas => {
                        return (
                            <Ruta key={rutas.id} excursion={rutas} />
                        )
                    })
                }
            </div>
            <h3>Precio total: {precio}€</h3>
        </div>
    )
}