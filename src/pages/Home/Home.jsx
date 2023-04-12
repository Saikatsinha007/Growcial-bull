import React from 'react';
import Contact from '../../components/Contact/Contact';
import EnrollContent from '../../components/EnrollContent/EnrollContent';
import Header from '../../components/Header/Header';
import Testimonials from '../../components/Testimonials/Testimonials'
import Services from './../../pages/Services/Services'
import Blogs from './../../components/Blogs/Blogs';
import Footer from '../../components/Footer/Footer';
import Referral from '../../components/Referral/Referral';

const Home = ({ enrollVisible, setEnrollVisible }) => {
    return (
        <div id='home' className='z-0'>
            <Header />
            <Services />
            <Testimonials />
            {/* <AboutUs /> */}
            <Blogs />
            <Referral />
            <Contact />
            {enrollVisible && <EnrollContent setEnrollVisible={setEnrollVisible} />}
            {/* <Footer /> */}
        </div>
    );
};

export default Home;