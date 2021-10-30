import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';

//links end-------------------------------

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // --------------------------------------------------------
    return (
        <div>
            <Container>
                <div className="py-4 text-color">
                    <h5><small>EXPLORE GREAT PLACES
                    </small></h5>
                    <h1>POPULAR PACKAGES</h1>
                </div>
                <Row xs={1} lg={3} className="g-4 common-bg py-4">

                    {
                        services.map(service => <Service

                            key={service._id}
                            service={service}


                        ></Service>)
                    }

                </Row>


            </Container>

        </div>
    );
};

export default Services;