import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Bannar from '../Shared/Bannar';





const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Features></Features>
            <About></About>

            <Blogs></Blogs>
        </div>
    );
};

export default Home;