import {Form, Button} from 'react-bootstrap';
import NavigationBar from "../Components/NavigationBar";
import { useAppDispatch } from '../app/hooks';
import { useHistory } from "react-router-dom";

import { login } from "../features/usersession/userSessionSlice";

function LoginForm() {
    const history = useHistory();
    const dispatch = useAppDispatch();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
          event.stopPropagation();
        }

        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries())
        dispatch(login(formDataObj.username as string));
        history.push('/');
    };

    return (
        <div>
            <NavigationBar/>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="username" type="email" placeholder="example@gmail.com"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Zaloguj
                </Button>
            </Form>
        </div>
    );
}

export default LoginForm;