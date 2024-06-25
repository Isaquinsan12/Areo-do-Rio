import CookieConsent from "react-cookie-consent";

const Cookie = ()=> {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="miConsentimientoDeCookies"
        style={{ background: "#fffaff", width:"30rem" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px", backgroundColor:"#D3FAD6" }}
        expires={150}
      >
        Utilizamos cookies para mejorar nuestros servicios analizando sus hábitos de navegación. Si continua navegando, consideramos que acepta su uso.{" "}
        <span style={{ fontSize: "10px" }}>¡Acepta para continuar!</span>
      </CookieConsent>
    </div>
  );
}

export default Cookie;

