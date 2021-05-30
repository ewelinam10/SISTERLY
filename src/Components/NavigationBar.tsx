
import { Navbar, Nav, FormControl, Form, NavDropdown, Button, NavLink } from 'react-bootstrap';
import image from '../images/logo.svg'

interface NavigationBarProps {
    isLoggedIn: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = (options: NavigationBarProps) => {
    let navLinks: JSX.Element[] = options.isLoggedIn ? getLinks4LoggedInUser() : getMainLinks();
    return (
        <Navbar sticky="top" className='small' expand="lg">
            <Navbar.Brand href="/">
                <img width='45%' src={image} />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id=" basic-navbar-nav">
                <Nav>
                    {navLinks}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

function getLinks4LoggedInUser(): JSX.Element[] {
    let navLinks: JSX.Element[] = [];
    navLinks.push(<Nav.Link href="/addGroup">ZAŁÓŻ KRĄG</Nav.Link>);
    navLinks.push(<Nav.Link href="/myTools">WIDOK SPOTKANIA</Nav.Link>);
    navLinks.push(<Nav.Link href="/mentors">MENTORZY</Nav.Link>);
    navLinks.push(<Nav.Link href="/rules">KODEKS SISTERLY</Nav.Link>);
    navLinks.push(<Nav.Link href="/knowhow">BAZA WIEDZY</Nav.Link>);
    navLinks.push(<Nav.Link href="/logout">WYLOGUJ</Nav.Link>);
    return navLinks;
}

function getMainLinks(): JSX.Element[] {
    let navLinks: JSX.Element[] = [];
    navLinks.push(<Nav.Link href="/singin">ZALOGUJ</Nav.Link>);
    navLinks.push(<Nav.Link href="/signup">ZAŁÓŻ KONTO</Nav.Link>);
    navLinks.push(<Nav.Link href="/mentor_registration">ZOSTAŃ MENTOREM</Nav.Link>);
    return navLinks;
}

export default NavigationBar;