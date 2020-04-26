import React from 'react';
import './App.css';
import Landingpage from './contents/Landingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Exercises from './contents/Exercises';
import Nutrition from './contents/Nutrition';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>


      <div className="App">
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
          <Navbar.Brand as={Link} to="/" className="nav-title" >Kotitreenaajan Käsikirja</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end nav-links">
              <Nav.Link as={Link} to="/laihtuminen" >Laihtuminen</Nav.Link>
              <Nav.Link as={Link} to="/treenit">Treenit</Nav.Link>
              <Nav.Link href="#kysytyt">Usein Kysytyt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <div className="contents">
        <Landingpage />
        <Nutrition/>
        <Exercises/>
      
      </div> */}

        <Route exact path="/">
          <Landingpage />
        </Route>

        <Route exact path="/laihtuminen">
          <Nutrition />
        </Route>

        <Route exact path="/treenit">
          <Exercises />
        </Route>



      </div>
    </Router>
  );
}

export default App;
