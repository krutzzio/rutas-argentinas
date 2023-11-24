import { useState, useEffect } from "react"
import { useParams } from "react-router"

import { Excursion } from "./Excursion"
import "./Excursiones.css"


export function Excursiones() {

    const { zona } = useParams()

    const [excursionAPI, setExcursionAPI] = useState([])

    useEffect(() => {
        const API_EXCURSIONES = `http://localhost:3000/api/zonas/${zona}/excursiones`
        const peticion = fetch(API_EXCURSIONES)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((excursiones) => {
                setExcursionAPI(excursiones)
            })
            .catch((error) => window.alert(error))
    }, [zona])

    return (
        <div className="excursionesComponent">
            <h1>EXCURSIONES</h1>
            <div className="excursiones">
                {excursionAPI.length === 0
                    ? (<h2>No hay excursiones para esta zona</h2>)
                    : (excursionAPI.map(info => <Excursion key={info.idexcursion} info={info} />))
                }
            </div>
        </div>
    )
}