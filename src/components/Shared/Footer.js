import React from 'react';
import { Col, Row } from 'react-bootstrap';



const Footer = () => {
    return (
        <div className=" mt-5">

            <Row xs={1} lg={4} className="g-4 common-bg p-5 text-start text-light">

                <Col>
                    <>
                        <h3>Ikea travels guide</h3>
                        <p>WELCOME TO OUREVENTS</p>
                        <p>Explore new worlds with us</p>


                    </>
                </Col>
                <Col>
                    <>



                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Our Team</p>
                        <p>Blog</p>
                        <p>Legal Notice</p>
                    </>
                </Col>
                <Col>
                    <>

                        <h4>Support</h4>
                        <p>FAQ</p>
                        <p> Ticket Support</p>
                        <p>My Account</p>
                        <p>Contact Us</p>
                    </>
                </Col>
                <Col>
                    <>



                        <h4>Our Office</h4>
                        <p>Jln Cempaka Wangi No 22, <br /> Jakarta - Indonesia</p>
                        <p>contact@Gmail.Com</p>
                        <p>+(62)21 2002-2012</p>

                    </>
                </Col>

            </Row>

        </div>
    );
};

export default Footer;