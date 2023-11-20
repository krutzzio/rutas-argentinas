import "./MainPage.css"
import mainImg from "../images/argentina.webp"


export function MainPage() {

    return (
        <nav className="main">
            <h1>ARGENTINA Y PATAGONIA</h1>
            <img src={mainImg} alt="Foto portada argentina" />
        </nav>
    )
}
