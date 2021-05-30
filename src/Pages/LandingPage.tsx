import AboutContainer from "../Components/About";
import LandingContainer from "../Components/LandingContainer";
import NavigationBar from "../Components/NavigationBar";
import React from "react";
import HowItWorksContainer from "../Components/HowItWorksContainer";
import RecomendationContainer from "../Components/RecomendationContainer";


const LandingPage = () => {
    return (
        <div>
            <NavigationBar />

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

        </div>

    )
}

export default LandingPage;