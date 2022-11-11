import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Icon from '../assets/Icon.png';
import partner from '../assets/partner.png';
import Login from '../atoms/Login';
import Register from '../atoms/Register';

function NavbarAfterLogin() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);


  return (
    <div>
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={Icon}
              width="160"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Form className="d-flex">
              <Button variant="outline-success" className='mx-1' onClick={() => setShowLogin(true)}>Login</Button>
              <Button variant="primary" className="mx-1" onClick={() => setShowRegister(true)}>Register</Button>
            </Form> */}
              <div className="dropdown">
                <img
                  alt={partner}
                  // src={profileNavbar?.image ? "http://localhost:5000/uploads/" + profileNavbar?.image : Partner}
                  src={partner}
                  style={{
                    maxWidth: "50px",
                    maxHeight: "50px",
                    objectFit: "cover",
                  }}
                  className="dropdown-toggle align-top mx-1 rounded"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">
                      {/* <img
                      alt="navbar-logo"
                      src={User}
                      width="20"
                      height="20"
                      className="align-top mx-1"
                    /> */}
                      Profile
                    </button>
                  </li>
                  <li className='d-flex'>
                    <button className="dropdown-item">
                      {/* <img
                      alt="navbar-logo"
                      src={Product}
                      width="20"
                      height="20"
                      className="align-top mx-1"
                    /> */}
                      Add Product
                      {/* <Link to='/ProductPartner/${sttid}' className='link'>
                                                    </Link> */}
                    </button>
                  </li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li className='d-flex'>
                    <button class="dropdown-item">
                      {/* <img
                      alt="navbar-logo"
                      src={Logout}
                      width="20"
                      height="20"
                      className="align-top mx-1"
                    /> */}
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login show={showLogin} setShow={setShowLogin} setShowRegister={setShowRegister} />
      <Register show={showRegister} setShow={setShowRegister} setShowLogin={setShowLogin} />
    </div>
  );
}

export default NavbarAfterLogin;