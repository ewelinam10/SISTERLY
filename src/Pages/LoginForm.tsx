import { Form, Button } from 'react-bootstrap';


function LoginForm() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label >Email</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Zaloguj
    </Button>
        </Form>
    );
}

export default LoginForm;