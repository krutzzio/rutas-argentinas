import { useEffect, useState } from "react";
import Context from "./Context";


const Provider = ({ children }) => {
    const [listaRutas, setListaRutas] = useState([]);

    useEffect(() => {
        const storage = localStorage.getItem("listaRutas")
        console.log(JSON.parse(storage), storage)
        const rutas = storage ? JSON.parse(storage) : []
        setListaRutas(rutas)
    }, [])

    useEffect(() => {
        localStorage.setItem("listaRutas", JSON.stringify(listaRutas))
    }, [listaRutas])

    const [zonas, setZonas] = useState([])
    const API_ZONAS = 'http://localhost:3000/api/zonas'

    useEffect(() => {
        const peticion = fetch(API_ZONAS)
        peticion
            .then((resp) => {
                return resp.json()
            })
            .then((zonas) => { setZonas(zonas) })
            .catch((error) => window.alert(error))
    }, [])

    return (
        <Context.Provider value={{ listaRutas, setListaRutas ,zonas}}>
            {children}
        </Context.Provider>
    )
}
export default Provider;