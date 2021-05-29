
import { Navbar, Nav, FormControl, Form, NavDropdown, Button } from 'react-bootstrap';
import image from '../images/logo.svg'
const NavigationBar = () => {

    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img width='45%' src={image} />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id=" basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/mentor_registration">Zostań mentorem</Nav.Link>
                    <Nav.Link href="/singin">Zaloguj</Nav.Link>
                    <Nav.Link href="/signup">Załóż konto</Nav.Link>
                    <Nav.Link href="/addGroup">Dodaj grupę</Nav.Link>
                    <Nav.Link href="/myTools">Narzędzia</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default NavigationBar;