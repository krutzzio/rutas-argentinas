import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
    const [precioFinal, setprecioFinal] = useState(0);
    return (
        <Context.Provider value={{ precioFinal, setprecioFinal }}>
            {children}
        </Context.Provider>
    )
}
export default Provider;