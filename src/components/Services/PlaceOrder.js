import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
// -----------------------------------------
const PlaceOrder = () => {
    const [servicess, SetServicess] = useState({})
    const { id } = useParams()
    const { user } = useAuth();
    // -------------------hook form-----------------------
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {


        // ----trying but unable to conneted with mongo --- fail----------
        //const url= http://localhost:5000/myOrders
        // https://lit-wildwood-88545.herokuapp.com/myOrders
        // -----------------------------------


        fetch('', {
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

                    reset();
                }
            })
    }


    // --------------------------------------------
    useEffect(() => {
        fetch(`https://lit-wildwood-88545.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => SetServicess(data))

    }, [])


    // delete orders-----------------------
    const deletingservices = id => {
        fetch(`https://lit-wildwood-88545.herokuapp.com/services/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    alert('delete confirmation')

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


                                    <Button onClick={() => deletingservices(servicess?._id)} className="m-2 text-black" variant="outline-danger"> Cancle </Button>
                                </Card.Text>
                            </Card.Body>


                        </Card>
                    </Col>
                    <Col xs={12} md={6} >
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />
                            <br /><br />
                            <input defaultValue={user.email} {...register("email", { required: true })} />

                            <br /><br />
                            {errors.email && <span className="error">This field is required</span>}

                            <input placeholder="cell " defaultValue="" {...register("cell")} />

                            <br /><br />
                            <input placeholder="Address" defaultValue="" {...register("address")} />

                            <br /><br />
                            <input placeholder="Country" defaultValue="" {...register("Country")} />

                            <br /><br />



                            <input className=" btn-primary p-2" type="submit" value="Place order" />
                        </form>
                    </Col>

                </Row>

            </Container>



        </div>
    );
};

export default PlaceOrder;