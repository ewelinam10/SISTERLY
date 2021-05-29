import AboutContainer from "../components/About";
import LandingContainer from "../components/LandingContainer";
import NavigationBar from "../components/NavigationBar";
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