import {Col, Form, Row} from "react-bootstrap";
import StyledButton from "./Button";


const EmailElement = () => {

    return (
        <Form>
            <Form.Group as={Row} controlClass='emailform'>
                <Col xs={7} className='emailForm'>
                    <Form.Control type="email" placeholder="example@gmail.com"/>
                </Col>
                <StyledButton>DOŁĄCZ!</StyledButton>
            </Form.Group>
        </Form>
    )
}

export default EmailElement;