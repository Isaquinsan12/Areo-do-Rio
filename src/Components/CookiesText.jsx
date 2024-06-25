import PrivacyText from "./PrivacyText"
import { NavLink } from "react-router-dom"

const CookiesText = () =>{
    return(
        <>
        <h3>Cookies y la privacidad</h3>
        <p>Las cookies y tu privacidad
        Las cookies son rastreadores que se depositan y/o leen, por ejemplo, cuando visitas un sitio web y se almacenan en tu navegador. Nos permiten reconocer el navegador de tu ordenador y retener la información durante el tiempo de validez de la cookie. El objetivo principal de las cookies es optimizar tu navegación en nuestro sitio web y ofrecerte publicidad que pueda interesarte cuando visitas sitios web de terceros. Pulsa en las diferentes categorías para obtener más detalles sobre cada una de ellas, y para cambiar la configuración por defecto. Ten en cuenta que si rechazas ciertos tipos de cookies, tu experiencia de navegación y los servicios que podemos ofrecer pueden verse afectados.<NavLink to="/politica-de-privacidad" element={<PrivacyText/>}>Política de Privacidad</NavLink> </p>
        </>
    )
}

export default CookiesText;