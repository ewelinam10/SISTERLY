import React from "react";
import RecomendationCard from "./RecomendationCard";
import emportret from "../images/em_portret.jpg";
import mwportret from "../images/MW_foto.jpg";
import kmportret from "../images/kasia.jpg";
import {Accordion, Card, Button, Form, Row, Col} from 'react-bootstrap';
import PlusIcon from "../images/icons/plus-icon.svg"
import StyledButton from "./Button";
import EmailForm from "./EmailForm";

const RecomendationContainer = () => {

    return (

        <div>
            <h1>Najczęściej zadawane pytania</h1>


            <Accordion defaultActiveKey="1">
                <Accordion.Toggle className="accordion-header" eventKey="0">
                    Czym różni się Sisterly od grup tematycznych w socjal mediach?
                    <img src={PlusIcon} className="accordionIcon"/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>W Sisterly skupiamy się konkretenie na budowaniu kręgów spotykających się regularnie
                        online. Od nas dostajesz wsparcie i narzędzia do ich prowadzenia. Żadna z platform nie zapewnia
                        konkretnie takiego rozwiązania. </Card.Body>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Toggle className="accordion-header" eventKey="0">
                    Czy tematy grup są ograniczone tylko do rozwoju osobistego?
                    <img src={PlusIcon} className="accordionIcon"/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Nie! Tematy wymyślacie same, w zależności tego czego aktualnie porzebujecie, czy to
                        motywacja w trakcie pisania doktoratu, rozmowy o podróżach, nauka lepienia pierogów czy
                        programowania.</Card.Body>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Toggle className="accordion-header" eventKey="0">
                    Znalazłam swoją grupę i co dalej?
                    <img src={PlusIcon} className="accordionIcon"/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Po zawiązaniu kręgu ustalacie zasady i spotykacie sie regularnie online by czerpać z
                        grupy wsparcie i motywację. Platforma prowadzi Was za rękę w zakresie technicznym i na każdym
                        kroku daje wskazówki jak współdziałać skutecznie i serdecznie. </Card.Body>
                </Accordion.Collapse>
            </Accordion>

            <Accordion defaultActiveKey="1">
                <Accordion.Toggle className="accordion-header" eventKey="0">
                    Czy korzystanie z platformy jest płatne?
                    <img src={PlusIcon} className="accordionIcon"/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Korzystanie z platformy jest darmowe. Dajemy jednak możliwość korzystania z płatnych
                        narzędzi jeśli uznacie z grupą, że tego potrzebujecie. </Card.Body>
                </Accordion.Collapse>
            </Accordion>

            <div className="mt-3">
                Nie czekaj, siostrzana energia jest na wyciągnięcie ręki!
            </div>

        </div>

    )

}

export default RecomendationContainer;