import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../img/icon6.png'
import img1 from '../../img/icon7.png'
import img2 from '../../img/icon9.png'
import img3 from '../../img/icon10.png'
// impoted sources-----------------

const Features = () => {






    return (
        <Container>
            <div className=" text-center bg-features  my-5 py-4 ">

                <h1 className="text-color">ADVENTURE & ACTIVITY</h1>
                <Row className=" ">

                    <Col md={3} className="" >

                        <img className="images" src={img} alt="" />
                        <h5>Adventure </h5>

                        <p className="text-primary "> 15 Destination</p>
                    </Col>
                    <Col md={3} className="text-center testimoni-bg ">

                        <img className="images" src={img1} alt="" />
                        <h5>Camping</h5>

                        <p className="text-primary ">
                            13 Destination</p>
                    </Col>
                    <Col md={3} className="text-center testimoni-bg ">

                        <img className="images" src={img2} alt="" />
                        <h5>Camp Fire</h5>

                        <p className="text-primary "> 7 Destination</p>
                    </Col>
                    <Col md={3} className="text-center testimoni-bg ">

                        <img className="images" src={img3} alt="" />
                        <h5>Camp Fire</h5>

                        <p className="text-primary "> 7 Destination</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};


export default Features;