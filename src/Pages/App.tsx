import logo from './logo.svg';
import {Counter} from '../features/counter/Counter';
import '../styles/allstyles.scss';
import {Button} from 'react-bootstrap';
import LoginForm from './LoginForm';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";
import RegistrationForm from './RegistrationForm';
import GroupsView from './GroupsView';
import AddGroup from "./AddGroup";
import NavigationBar from '../Components/NavigationBar';
import MentorRegistration from './MentorRegistration';
import LandingPage from './LandingPage';
import MyTools from "./MyTools";
import {isUserLoggedIn, userName} from "../features/usersession/userSessionSlice"
import {useAppSelector,} from '../app/hooks';
import Mentors from './Mentors';


export default function App() {

    const isLoggedIn = useAppSelector(isUserLoggedIn);
    const username = useAppSelector(userName);
    return (
        <Router>
            <NavigationBar isLoggedIn={isLoggedIn}/>
            <Switch>
                <Route path="/singin">
                    <LoginForm/>
                </Route>
                <Route path="/signup">
                    <RegistrationForm/>
                </Route>
                <Route path="/mentor_registration">
                    <MentorRegistration/>
                </Route>
                <Route path="/addGroup">
                    <AddGroup/>
                </Route>
                <Route exact path="/myTools" component={MyTools}>
                </Route>
                <Route path="/mentors">
                    <Mentors/>
                </Route>
                <Route path="/">
                    <LandingPage/>
                </Route>

            </Switch>
            <div className="main-footer">
                <span className="main-contact">Kontakt</span>

                <svg xmlns="http://www.w3.org/2000/svg" className="main-footer-icon-facebook" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFF">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="main-footer-icon-mail"  enable-background="new 0 0 24 24" height="24px"
                     viewBox="0 0 24 24" width="24px" fill="#FFF">
                    <rect fill="none" height="24" width="24"/>
                    <path
                        d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/>
                </svg>

            </div>
        </Router>
    );
}


// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Grupy</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/IT`}>Grupy ze świata IT</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/Psychology`}>Grupy ze świata psychologii</Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           {/* <GroupsView groupsType={topicId}/> jakos przekazac*/}
//           <GroupsView groupsType='IT' />
//         </Route>
//         <Route path={match.path}>
//           {/* <GroupsView groupsType='IT' /> */}
//         </Route>
//       </Switch>
//     </div>
//   );
// }

