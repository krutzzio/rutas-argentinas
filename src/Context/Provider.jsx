import { useEffect, useState } from "react";
import Context from "./Context";


const Provider = ({ children }) => {
    const [listaRutas, setListaRutas] = useState();

    useEffect(()=>{
        const storage = localStorage.getItem("listaRutas")
        const rutas = storage ? JSON.parse(storage) : []
        setListaRutas(rutas)
    }, [])

    useEffect(() => {
        localStorage.setItem("listaRutas",JSON.stringify(listaRutas))
    }, [listaRutas])
  
    return (
        <Context.Provider value={{ listaRutas, setListaRutas}}>
            {children}
        </Context.Provider>
    )
}
export default Provider;