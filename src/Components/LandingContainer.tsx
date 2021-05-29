import { Form, Button, Col, Row } from 'react-bootstrap';
import image from '../images/main_image.jpeg'
import StyledButton from './/Button'

const LandingContainer = () => {
    return (
        <div className='landing-container'>
            <div>
                <div className='welcome-text'>
                    <h1>ZNAJDŹ WSPARCIE <br />W SIOSTRZANYM KRĘGU</h1>
                    <span>
                        Sisterly, to jedyne takie miejsce w sieci, oparte na życzliwości i siostrzanym wsparciu.
                    </span>
                </div>

                <Form>
                    <Form.Group as={Row} controlId='emailform'>
                        <Col xs={7} className='emailForm'>
                            <Form.Control type="email" placeholder="example@gmail.com" />
                        </Col>
                        <StyledButton>DOŁĄCZ!</StyledButton>
                    </Form.Group>




                </Form>
            </div>

            <div>
                <img src={image} />
            </div>


        </div >
    )

}

export default LandingContainer;