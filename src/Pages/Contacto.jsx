import '../Styles/styles.css';
import ContactUs from '../Components/ContactUs'

const Contacto = () =>{
    return(
        <main className="contacto">
            <ContactUs />
<section className='seccion-contacto-mapa'>
<p>Email: viajesnavaza@gmail.com</p>
<p>Tel.: +34 607 40 62 22</p>
    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.255380063197!2d-8.709644411144996!3d43.2879733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e908abf846ae9%3A0x1b89991b32e2ba79!2sChalet%20Areo%20do%20rio%20-%20playa%20de%20razo!5e0!3m2!1ses!2ses!4v1707413335183!5m2!1ses!2ses" width="800" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</section>
    </main>
    )
};

export default Contacto;