import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from '../../img/about us.jpg'


const About = () => {
    return (

        <Container className="about">

            <h1 className="my-5 pt-4 text-color">Travel the world one <br /> place at a time

            </h1>


            <Row >
                <Col sm={8} lg={6}>
                    <img className="w-75 about" src={img} alt="" />

                </Col>
                <Col sm={4} lg={6} className="py-5 ">
                    <h3> We provide amazing travel services including air tickets, tour packages, hotel booking and visa ...</h3>
                    <p>ShareTrip is the best travel agency in Bangladesh. We provide amazing travel services including air tickets, tour packages, hotel booking and visa ShareTrip is the best travel agency in Bangladesh. We provide amazing travel services including air tickets, tour packages, hotel booking and visa ...</p>

                    <Button variant="outline-primary">Read more</Button>


                </Col>

            </Row>
        </Container>

    );
};

export default About;