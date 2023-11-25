import "./ListaRutas.css"
import { useEffect, useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';

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

    const eliminarRutaTotal = (id) => {

        setExcursionAPI(excursionAPI.filter(elem => elem.idexcursion !== id))

        const api = `http://localhost:3000/api/excursiones/${id}`

        const parametros = {
            'method': 'DELETE',
            'mode': 'cors'
        }

        fetch(api, parametros)
            .then(function (respuesta) {
                console.log(respuesta)
                if (respuesta.ok) {
                    return respuesta.json()
                }
            })
            .then(function (mensaje) {
                console.log(mensaje)
            })
            .catch(function (error) {
                window.alert(error)
            })
    }


    return (
        <div className="lista-rutas">
            <h1>LISTA RUTAS</h1>
            {
                excursionAPI.map((elem, i) => {
                    return (
                        <div key={i} className="rutas">
                            <div className="info-rutas">
                                <img src={`/images/${elem.imagen}`} alt="Imagen de la excursion" />
                                <div className="more-info">
                                    <h3>{elem.nombre}</h3>
                                    <h3>Precio: {elem.precio}€</h3>
                                </div>
                            </div>
                            <div className="boton-eliminar" onClick={() => eliminarRutaTotal(elem.idexcursion)}><RemoveIcon /> Eliminar de la base de datos</div>
                        </div>)
                })
            }
        </div>
    )
}