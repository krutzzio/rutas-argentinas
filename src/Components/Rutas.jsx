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

    const imprimir = () => { window.print() }

    return (
        <div className="rutas-l">
            <h1>RUTAS</h1>
                {
                    listaRutas.length !== 0

                        ? (
                            <>
                                <div className="lista-rutas">
                                    {listaRutas.map(rutas => {
                                        return (
                                            <Ruta key={rutas.idexcursion} excursion={rutas} />
                                        )
                                    })}
                                </div>
                                <h3>Precio total: {precio}€</h3>
                                <button className='imprimir' onClick={imprimir}>Imprimir</button>                            </>
                        )
                        : (<h2>NO HAY EXCURSIONES AÑADIDAS</h2>)
                }
        </div>
    )
}