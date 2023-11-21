import { useState } from "react";
import Context from "./Context";

import EXCURSIONES from "../Constants/excursiones"


const Provider = ({ children }) => {
    const [listaRutas, setListaRutas] = useState([EXCURSIONES[1],EXCURSIONES[7]]);

    return (
        <Context.Provider value={{ listaRutas, setListaRutas}}>
            {children}
        </Context.Provider>
    )
}
export default Provider;