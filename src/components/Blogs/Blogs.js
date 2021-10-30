import React from 'react';
import img1 from '../../img/img17.jpg'
import img2 from '../../img/img18.jpg'
import img from '../../img/img19.jpg'
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="p-5">
            <Container>
                <h5><small>FROM OUR BLOG
                </small></h5>
                <h1 className="text-color">  OUR RECENT POSTS</h1>

                <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Life is a beautiful journey not a destination</Card.Title>

                                <Card.Text >
                                    jun 10, 2021 <span className="ps-4 ">Posted : Lorry Brandson</span>

                                </Card.Text>
                                <Button variant="outline-warning">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Take only memories, leave only footprints</Card.Title>

                                <Card.Text>
                                    Mar 19, 2021 <span className="ps-4 ">Posted : Jonathon swifft</span>

                                </Card.Text>
                                <Button variant="outline-warning">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Journeys are best measured in new friends</Card.Title>

                                <Card.Text >
                                    Jun, 2021 <span className="ps-4">Posted : Harris </span>

                                </Card.Text>
                                <Button variant="outline-warning">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Blogs;