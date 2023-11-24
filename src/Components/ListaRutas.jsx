import "./ListaRutas.css"
import { useEffect, useState } from "react"
import { Ruta } from "./Ruta"

export function ListaRutas() {

    const [excursionAPI, setExcursionAPI] = useState([])

    useEffect(() => {
        const API_EXCURSIONES = `http://localhost:3000/api/excursiones`
        const peticion = fetch(API_EXCURSIONES)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((excursiones) => {
                setExcursionAPI(excursiones)
            })
            .catch((error) => window.alert(error))
    }, [])



    return (
        <div className="lista-rutas">
            <h1>LISTA RUTAS</h1>
            {
                excursionAPI.map(elem => {
                    return (
                        <div className="ruta">
                            <div className="info-ruta">
                                <img src={require(`../images/${elemm.imagen}`)} alt="Imagen de la excursion" />
                                <div className="more-info">
                                    <h3>{elem.nombre}</h3>
                                    <h3>Precio: {elem.precio}€</h3>
                                </div>
                            </div>
                            <div className="removeRuta" onClick={() => setListaRutas(listaRutas.filter(ruta =>  !== excursion))}><RemoveIcon />Eliminar excursion</div>
                        </div>)
                })
            }
        </div>
    )
}