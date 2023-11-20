import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [listaRutas, setListaRutas] = useState([]);

    return (
        <Context.Provider value={{ listaRutas, setListaRutas}}>
            {children}
        </Context.Provider>
    )
}
export default Provider;