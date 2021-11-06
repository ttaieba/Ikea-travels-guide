import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const email = user.email
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://lit-wildwood-88545.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://lit-wildwood-88545.herokuapp.com/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };

    return (
        <Container>
            <h1 className="text-center text-primary"> Orders Summary </h1>
            <Row className="g-2" >

                {orders?.map((order) => (
                    <Col xs={12} md={4} className="">

                        <div className=" p-3">

                            <img className="w-100" src={order?.img} alt="" />

                            <h6>{order?.name}</h6>
                            <h3 >  :{order?.price}$</h3>

                            <p>{order?.des}</p>


                            <Button
                                onClick={() => handleDelete(order?._id)}
                                className=" btn-danger"
                            >
                                Cancel
                            </Button>
                        </div>

                    </Col>


                ))}

            </Row>




        </Container >
    );
};

export default MyOrders;
