

import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../img/cover-3.jpg';
import img1 from '../../img/cover-2.jpg';

const Bannar = () => {



    // -------------bannar section-------------


    return (
        <div>


            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-white ">
                            TRAVELLING AROUND <br /> THE WORLD </h1>
                        <h3 className="text-primary fw-bold">Best  tour operators in bangladesh
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-white">
                            TRAVELLING AROUND <br /> THE WORLD
                        </h1>
                        <h3 className="text-primary fw-bold">Best  tour operators in bangladesh
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Bannar;