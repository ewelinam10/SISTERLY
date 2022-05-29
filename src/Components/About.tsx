import heartImg from "../images/hearticon.svg"

const AboutContainer = () => {
    return (
        <div className='about-container'>
            <h1>Czym jest Sisterly? </h1>
            <h3>
                Na platformie Sisterly pomagamy kobietom spotykać się on-line w małych (do 5 osób) grupach skupionych wokół ważnego dla Was tematu lub celu.

                <br /><br />

                Czegokolwiek aktualnie potrzebujecie: motywacji do realizacji projektu czy luźnej rozmowy o zainteresowaniach - jesteśmy dla Was, bo wiemy, że w KRĘGU SIŁA, W KRĘGU ROŚNIESZ
                <img className='animate__backInDown' src={heartImg} />
            </h3>

        </div>
    )

}

export default AboutContainer;