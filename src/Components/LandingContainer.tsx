import { Form, Button } from 'react-bootstrap';
import image from '../images/main_image.jpeg'
import StyledButton from './/Button'

const LandingContainer = () => {
    return (
        <div className='landing-container'>
            <div>
                <h1>ZNAJDŹ WSPARCIE W SIOSTRZANYM KRĘGU</h1>
                Sisterly, to jedyne takie miejsce w sieci, oparte na życzliwości i siostrzanym wsparciu.
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="example@gmail.com" />
                        <StyledButton>DOŁĄCZ!</StyledButton>
                    </Form.Group>

                </Form>
            </div>
            <img src={image} width='60%' />
        </div>
    )

}

export default LandingContainer;