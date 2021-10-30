import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'




const Service = (props) => {
    const { _id, name, img, des } = props.service


    return (
        <div>

            <Col className="" >
                <Card className="py-4 ">
                    <img className="card-style " src={img} alt="" />
                    <Card.Body className="common-bg text-light">
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            {des}

                        </Card.Text>
                        <Link to={`/placeOrder/${_id}`}><Button variant="outline-warning"><FontAwesomeIcon icon={faShoppingBag} /> Place Order </Button> </Link>

                    </Card.Body >

                </Card>
            </Col>


        </div >
    );
};

export default Service;