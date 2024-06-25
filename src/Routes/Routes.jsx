import { Routes, Route, NavLink } from "react-router-dom";
import Home from '../Pages/Home';
import Historia from '../Pages/Historia';
import Reservas from '../Pages/Reservas';
import Galeria from '../Pages/Galeria';
import Contacto from '../Pages/Contacto';
import PrivacyText from "../Components/PrivacyText";
import CookiesText from '../Components/CookiesText';

const RoutesAll = () =>{
    return(
        <>
        <nav>
        <button className="boton-navBar"><NavLink className="link-navBar" to='/'>Home</NavLink></button>
        <button className="boton-navBar"><NavLink className="link-navBar" to='/historia'>Historia</NavLink></button>
        <button className="boton-navBar"><NavLink className="link-navBar" to='/reservas'>Reservas</NavLink></button>
        <button className="boton-navBar"><NavLink className="link-navBar" to='/galeria'>Galeria</NavLink></button>
        <button className="boton-navBar"><NavLink className="link-navBar" to='/contacto'>Contacto</NavLink></button>
        </nav>
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="/historia" element={<Historia/>}/>
<Route path="/reservas" element={<Reservas/>}/>
<Route path="/galeria" element={<Galeria/>}/>
<Route path="/contacto" element={<Contacto/>}/>
<Route path="/politica-de-privacidad" element={<PrivacyText/>}/>
<Route path="/politica-de-cookies" element={<CookiesText/>}/>
    </Routes>
    </>
    )
};

export default RoutesAll;