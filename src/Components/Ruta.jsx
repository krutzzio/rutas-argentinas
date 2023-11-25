import "./Ruta.css"
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from "react";
import Context from "../Context/Context";


export function Ruta({ excursion }) {

    const { setListaRutas } = useContext(Context)
    const { listaRutas } = useContext(Context)

    return (
        <div className="ruta">
            <div className="info-ruta">
                <img src={`/images/${excursion.imagen}`} alt="Imagen de la excursion" />
                <div className="more-info">
                    <h3>{excursion.nombre}</h3>
                    <h3>Precio: {excursion.precio}€</h3>
                </div>
            </div>
            <div className="removeRuta" onClick={() => setListaRutas(listaRutas.filter(elem => elem !== excursion))}><RemoveIcon />Eliminar excursion</div>
        </div>
    )
}