import React, { } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



// links--------------------

const Login = () => {
    const { signInUingGoogle } = useAuth()

    //  redirect ------------------/

    const location = useLocation();
    const history = useHistory()

    const redirect_url = location.state?.from || "/"

    const handlegoogllogIN = () => {
        signInUingGoogle()
            .then(result => {
                history.push(redirect_url)

            })


    }

    return (
        <div >
            <p className="pt-5 mt-4"></p>


            <Container className="my-5 py-5">

                <Row>
                    <Col className="bg-c p-4 " xs={12} md={6}>

                        <h1 className="text-color p-4">Please Login</h1>




                        <form

                        >
                            <input
                                type="email"
                                placeholder="email "
                                name=""
                                id="" />
                            <br />
                            <br />
                            <input

                                type="password"
                                placeholder="password"
                                name=""
                                id="" />
                            <br /><br />
                            <input type="submit" value="Log In" className="bg-primary py-2" />

                            <br />
                            <br />
                            <Button className="btn-success p-2 " onClick={handlegoogllogIN}> Google Log In</Button>

                        </form>





                        <br />


                        <p className="text-primary my-4"> a please Register Here</p>

                    </Col>
                    <Col className="loging-img" xs={6} md={6}>
                        <h1>Say hi, and let's start <br /> a good conversation.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eum aperiam, odit fugiat culpa veniam consequuntur accusamus qui esse commodi!</p>

                    </Col>

                </Row>


            </Container>
        </div >
    );
};

export default Login;