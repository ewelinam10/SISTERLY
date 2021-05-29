import AboutContainer from "../Components/About";
import LandingContainer from "../Components/LandingContainer";
import NavigationBar from "../Components/NavigationBar";
import React from "react";


const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <section>
            <LandingContainer />
            </section>
            <section>
                <AboutContainer />
            </section>
        </div>                   

    )
}

export default LandingPage;