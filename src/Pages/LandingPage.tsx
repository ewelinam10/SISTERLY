import AboutContainer from "../Components/About";
import LandingContainer from "../Components/LandingContainer";
import React from "react";
import HowItWorksContainer from "../Components/HowItWorksContainer";
import RecomendationContainer from "../Components/RecomendationContainer";
import CommonQuestionsContainer from "../Components/CommonQuestionsContainer";


const LandingPage = () => {
    return (
        <div>
            <LandingContainer />

            <section>
                <AboutContainer />
            </section>
            <section>
                <HowItWorksContainer />
            </section>
            <section>
                <RecomendationContainer />
            </section>
            <section>
                <CommonQuestionsContainer />
            </section>

        </div>

    )
}

export default LandingPage;