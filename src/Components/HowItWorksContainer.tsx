import React from "react";
import Step from "./Step";
import step1 from "../images/step_1.svg";
import step2 from "../images/step_2.svg";
import step3 from "../images/step_3.svg";
import step4 from "../images/step_4.svg";


const HowItWorksContainer = () => {

    return (

        <div>
            <h1>Jak to działa?</h1>
            <div className='steps_container'>
                <Step title='Zaloguj się' desc='Bez obaw - nie jesteśmy kolejnym portalem ślędzącym Cię wszędzie. Podajesz tylko niezbędne dane a innym pokazujesz ile sama chcesz pokazać.' img={step1} />
                <Step title='Opowiedz nam o swoich potrzebach' desc='Wypełnij krótką ankietę, żebyśmy łatwiej mogli dobrać idealną grupę dla Ciebie.' img={step2} />
                <Step title='Znajdź swój krąg lub załóż nowy' desc='Na platformie znajdzie pomocne informacjie i wskazówki jak najlepiej do tego podejść.' img={step3} />
                <Step title='Ciesz się wsparcie grupy my zajmiemy się resztą!'
                    desc='Narzędzia, które oferuje Sisterly pomogą wam w organizacji spotkań, utrzymaniu dobrej atmosfery i motywacji.' img={step4} />
            </div>
        </div>

    )

}

export default HowItWorksContainer;