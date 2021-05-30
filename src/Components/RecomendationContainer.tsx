import React from "react";
import RecomendationCard from "./RecomendationCard";
import emportret from "../images/em_portret.jpg";
import mwportret from "../images/MW_foto.jpg";
import kmportret from "../images/kasia.jpg";


const RecomendationContainer = () => {

    return (

        <div>
            <h1>Dlaczego warto tu być?</h1>
            <div className='recomendation-card-container'>
                <RecomendationCard img={mwportret} userName='Marysia' hashtags={['przebranżawianie', 'rozwój_osobisty']} desc='Jakiś czas temu zauważyłam, że mój świat zdominowany jest przez mężczyzn. Brakowało mi kobiecej perspektywy. Sisterly daje możliwość połączenia się z dziewczynami otwartymi na wymianę doświadczeń w przyjaznej atmosferze.' />
                <RecomendationCard img={kmportret} userName='Kasia' hashtags={['doktoratpogodzinach', 'nieumiemwpaznokcie']} desc='Znalazłam krąg kobiet, które mnie rozumieją bez zbędnego tłumaczenia, dają mi energii do działania.W drugim kręgu, gdzie próbujemy ogarnąć bycie kobietą sukcesu, która nie umie zrobić sobie paznokci - spotkałam tam kobiety ze świetnym poczuciem humoru.'/>
                <RecomendationCard img={emportret} userName='Ewelina' hashtags={['programowanie', 'kobietydokodu']} desc='Strona sisterly natchneła mnie do stworzenia małej grupki dziewczyn, która będzie wspólnie rozwijać wymyśloną przez nas aplikację. Strona zgrupowała mnie ze świetnymi dziewcznami i pomogła w zarządzaniu spotkaniami oraz zadaniami. ' />
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