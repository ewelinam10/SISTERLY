
import { Navbar, Nav, FormControl, Form, NavDropdown, Button, NavLink } from 'react-bootstrap';
import image from '../images/logo.svg'
import { useAppDispatch } from '../app/hooks';
import { logout } from "../features/usersession/userSessionSlice";


interface NavigationBarProps {
    isLoggedIn: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = (options: NavigationBarProps) => {
    const dispatch = useAppDispatch();
    const onLogoutClick = () => {
        dispatch(logout());
    };
    let navLinks: JSX.Element[] = options.isLoggedIn ? getLinks4LoggedInUser(onLogoutClick) : getMainLinks();
    return (
        <Navbar sticky="top" expand="lg">
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

function getLinks4LoggedInUser(onLogoutClick: () => void): JSX.Element[] {
    let navLinks: JSX.Element[] = [];
    navLinks.push(<Nav.Link href="/addGroup">ZAŁÓŻ KRĄG</Nav.Link>);
    navLinks.push(<Nav.Link href="/myTools">WIDOK SPOTKANIA</Nav.Link>);
    navLinks.push(<Nav.Link href="/mentors">MENTORZY</Nav.Link>);
    navLinks.push(<Nav.Link href="/knowhow">BAZA WIEDZY</Nav.Link>);
    navLinks.push(getNavDrop(onLogoutClick));

    return navLinks;
}

function getNavDrop(onLogoutClick: () => void): JSX.Element {
    return (<NavDropdown title='' id="nav-dropdown">
        <NavDropdown.Item href='/editprofile'>EDYTUJ PROFIL</NavDropdown.Item>
        <NavDropdown.Item href='/rules'>KODEKS SISTERLY</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={onLogoutClick} href='/'>WYLOGUJ</NavDropdown.Item>
    </NavDropdown>);
}



function getMainLinks(): JSX.Element[] {
    let navLinks: JSX.Element[] = [];
    navLinks.push(<Nav.Link href="/singin">ZALOGUJ</Nav.Link>);
    navLinks.push(<Nav.Link href="/signup">ZAŁÓŻ KONTO</Nav.Link>);
    navLinks.push(<Nav.Link href="/mentor_registration">ZOSTAŃ MENTOREM</Nav.Link>);
    return navLinks;
}

export default NavigationBar;