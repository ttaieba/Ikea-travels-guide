import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

// -----------------------------------------
const PlaceOrder = () => {
    const [servicess, SetServicess] = useState({})
    const { id } = useParams()
    const { user } = useAuth();

    const email = user.email
    const userName = user.displayName

    useEffect(() => {
        fetch(`https://lit-wildwood-88545.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => SetServicess(data))

    }, [])

    // -------------------hook form-----------------------
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.email = email;
        data.userName = userName;
        data.status = "pending";



        // ----trying but unable to conneted with mongo --- fail----------
        //const url= http://localhost:5000/myOrders
        // https://lit-wildwood-88545.herokuapp.com/myOrders
        // -----------------------------------


        fetch('https://lit-wildwood-88545.herokuapp.com/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('placed your order');


                }
            })
    }

    return (
        <div>
            <Container className="mt-4 p-4 fluid">
                <h5>Name: {user.displayName}</h5>
                <p>Your email: {user.email}</p>
                <Row className="g-4">


                    {/* <p>use this {id}</p> */}

                    {/* ----------------------------------------- */}
                    <Col xs={12} md={6} className="" >

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={servicess?.img} />
                            <Card.Body>
                                <Card.Title>{servicess?.name}</Card.Title>
                                <Card.Text>
                                    <h5>{servicess?.price}</h5>
                                    {servicess?.des}



                                </Card.Text>
                            </Card.Body>


                        </Card>
                    </Col>
                    <Col xs={12} md={6} >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="g-2">
                                <Col xs={12} md={12} className="">
                                    <h5>Client details</h5>
                                    <input className=" w-75 " placeholder="cell " defaultValue="" {...register("cell")} />

                                    <br /><br />
                                    <input className=" w-75 " placeholder="Address" defaultValue="" {...register("address")} />

                                    <br /><br />
                                    <input className=" w-75 " placeholder="Country" defaultValue="" {...register("Country")} />


                                </Col>

                                <Col xs={12} md={12} >


                                    <h5>Order details</h5>
                                    <input className=" w-75 " defaultValue={servicess?.img}  {...register("img")} placeholder="Img url" />
                                    <br /><br />
                                    <input className=" w-75 " Value={servicess?.name} {...register("Servicename")} /> <br /> <br />


                                    <input className=" w-75 " defaultValue={servicess?.price} {...register("price", { required: true })} />

                                    <br /><br />
                                    {errors.email && <span className="error">This field is required</span>}
                                    <textarea className="py-4 w-75 " defaultValue={servicess?.des} {...register("des")} />



                                    <br /><br />
                                </Col>

                            </Row>


                            <input className=" btn-primary mt-4 p-2" type="submit" value="Place order" />
                        </form>
                        <Link to="/home"><Button className="m-2 text-black" variant="outline-danger"> Back to Home </Button>
                        </Link>

                    </Col>

                </Row>

            </Container>



        </div >
    );
};

export default PlaceOrder;