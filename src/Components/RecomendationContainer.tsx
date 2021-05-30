import React from "react";
import RecomendationCard from "./RecomendationCard";
import emportret from "../images/em_portret.jpg"
import slidebar from "../images/imitation_slide_bar.png"


const RecomendationContainer = () => {

    return (

        <div>
            <h1>Dlaczego warto tu być?</h1>
            <div className='recomendation-card-container'>
                <RecomendationCard img={emportret} userName='Marysia' hashtags={['przebranżawianie', 'rozwój_osobisty']} desc='Jakiś czas temu zauważyłam, że mój świat zdominowany jest przez mężczyzn. Brakowało mi kobiecej perspektywy. Sisterly daje możliwość połączenia się z dziewczynami otwartymi na wymianę doświadczeń w przyjaznej atmosferze.' />
                <RecomendationCard img={emportret} userName='Marysia' hashtags={['przebranżawianie', 'rozwój_osobisty']} desc='Jakiś czas temu zauważyłam, że mój świat zdominowany jest przez mężczyzn. Brakowało mi kobiecej perspektywy. Sisterly daje możliwość połączenia się z dziewczynami otwartymi na wymianę doświadczeń w przyjaznej atmosferze.' />
                <RecomendationCard img={emportret} userName='Marysia' hashtags={['przebranżawianie', 'rozwój_osobisty']} desc='Jakiś czas temu zauważyłam, że mój świat zdominowany jest przez mężczyzn. Brakowało mi kobiecej perspektywy. Sisterly daje możliwość połączenia się z dziewczynami otwartymi na wymianę doświadczeń w przyjaznej atmosferze.' />
            </div>
            <div className='circles'>
                <div id="circle" />
                <div id="circle" style={{ backgroundColor: '#5E548E' }} />
                <div id="circle" />
            </div>

        </div>

    )

}

export default RecomendationContainer;