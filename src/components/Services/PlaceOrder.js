import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
// -----------------------------------------
const PlaceOrder = () => {
    const [servicess, SetServicess] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => SetServicess(data))

    }, [])


    // delete orders-----------------------
    const deletingservices = id => {
        fetch(`http://localhost:5000/services/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    alert('delete confirmation')
                    // const remainService = servicess.filter(service => service._id !== id)
                    // SetServicess(remainService)
                }


            })
    }



    return (
        <div>
            <h1 className="text-color">Please Confirm Your  Order  </h1>
            {/* <p>use this {id}</p> */}

            {/* ----------------------------------------- */}

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={servicess?.img} />
                <Card.Body>
                    <Card.Title>{servicess?.name}</Card.Title>
                    <Card.Text>
                        {servicess?.des}

                        <Button className="m-2 text-black" variant="outline-warning"> Confirm Order </Button>
                        <Button onClick={() => deletingservices(servicess?._id)} className="m-2 text-black" variant="outline-danger"> Delete </Button>
                    </Card.Text>
                </Card.Body>


            </Card>











        </div>
    );
};

export default PlaceOrder;