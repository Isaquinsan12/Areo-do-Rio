import  '../Styles/styles.css';
import ContactUs from '../Components/ContactUs'
const Reservas = () =>{
    return(
        <>
        <main>
        <div id="main-reservas">
        <ContactUs />
        <div id="contenedor-reservas">
        <p className='enlace-reservas'>También puedes reservar a través de los siguientes enlaces:</p>
        <a className='enlace-reservas' href='https://www.airbnb.es/rooms/7728639?guests=1&adults=1&s=67&unique_share_id=5249a1d9-ad38-4f85-a017-192894a5113a' target="_blank">Airbnb</a>
        <a className='enlace-reservas' href='https://www.booking.com/hotel/es/chalet-areo-do-rio-playa-de-razo.es.html?aid=318615&label=Spanish_Spain_ES_ES_29561944705-DWMq4qSYLKNnJlgM34EN2gS634117834965%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55799144085%3Atidsa-302083110424%3Alp1005479%3Ali%3Adec%3Adm%3Aag29561944705%3Acmp340207705&sid=b5daf6270f14b0e6c97b9567b5fe7bfe&dest_id=-398494;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1715246344;srpvid=df134180b8e600bb;type=total;ucfs=1&' target="_blank">Booking</a>
        <a className='enlace-reservas' href='https://www.tripadvisor.es/VacationRentalReview-g1064089-d5284020-AREO_DO_RIO_DE_EVA-Carballo_Province_of_A_Coruna_Galicia.html' target="_blank">TripAdvisor</a>
        <a className='enlace-reservas' href='https://www.vrbo.com/es-es/p6516984' target="_blank">Vrbo</a>      
        </div>
        </div>
        </main>
    </>
    )
}

export default Reservas;