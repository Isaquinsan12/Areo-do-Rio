import  '../Styles/styles.css'
import myImage from '../assets/flora.jpg';
import myImageRock from '../assets/saltrock.jpg';
import myImageSisargas from '../assets/sisargas.jpg';
import myImageNoche from '../assets/noche.jpg';
import myImageMeiga from '../assets/meigas.jpg';


const Home = () =>{
    return(
<>
<main>
        <section className="contenedor-imagenes-home">
            <div>
            <figure>
                <figcaption className="hashtag">
                    #SomosMoito
                </figcaption>
                <img className="imagenes-home" src={myImage} alt="Razo1"/>
            </figure>
        <figure>
            <figcaption className="hashtag">
                #SeChoveQueChova
            </figcaption>
            <img className="imagenes-home" src={myImageRock} alt="Razo2"/>
        </figure>
        </div>
    
<div>
    <figure>
        <figcaption className="hashtag"> #Disque</figcaption>
        <img className="imagenes-home" src={myImageSisargas} alt="Razo alga"/>
    </figure>
    <figure>
        <figcaption className="hashtag">#Morriña</figcaption>
        <img className="imagenes-home" src="https://media.istockphoto.com/id/1755648363/es/foto/playa-de-razo-arnados-a-coru%C3%B1a-galicia.webp?b=1&s=170667a&w=0&k=20&c=w_D-R3L7-kGMYfbcnPj5MUFqdwR3eJBItlEcECFM4o8=" alt="playa Razo"/>
    </figure>
</div>
<div>
<figure>
    <figcaption className="hashtag">#MeigasFora</figcaption>
    <img className="imagenes-home" src={myImageMeiga} alt="hoguera"/>
</figure>
<figure>
    <figcaption className="hashtag">#GalizaCalidade</figcaption>
    <img className="imagenes-home" src={myImageNoche} alt="Razo de noche"/>
</figure>
</div>
</section>
</main>
</>
    )
}

export default Home;