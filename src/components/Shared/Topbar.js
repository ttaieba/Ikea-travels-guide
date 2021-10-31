import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../img/travele-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

//  ----------------------link-----------------------




const Topbar = () => {

    const { user, logout } = useAuth()


    return (
        <div>



            <Navbar className="common-bg" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={img} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={Link} className="text-white" to="/home">Home</Nav.Link>


                        <Nav.Link as={Link} className="text-white" to="/services">Services</Nav.Link>

                        <Nav.Link as={Link} className="text-white" to="/features"> Features</Nav.Link>




                        {user?.email ? <div className="d-flex">
                            <Nav.Link as={Link} className="text-white" to="/myOrders"> My Orders</Nav.Link>

                            <Nav.Link as={Link} className="text-white" to="/addService"> Add Services</Nav.Link>

                            <Nav.Link as={Link} className="text-white" to="/manageOrder"> ManageOrder</Nav.Link>

                            <Button onClick={logout} className="me-3" variant="light">Logout</Button>

                        </div>

                            :
                            <Nav.Link as={Link} className="text-white" to="/login"> Login</Nav.Link>



                        }


                        <Navbar.Text>
                            <FontAwesomeIcon icon={faUser} /> <a href="#login">{user.displayName}</a>

                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Topbar;