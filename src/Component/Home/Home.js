import React from 'react';
import Contact from '../Contact/Contact';
import Cruises from '../Cruise/Cruises';
import Footer from '../Footer/Footer';
import HEader from '../Header/HEader';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Navbar from '../Navbar/Navbar';
import RecoHotel from '../RecoHotel/RecoHotel';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HEader></HEader>
            <HeaderSearch></HeaderSearch>
            <WhyUs></WhyUs>
            <Services></Services>
            <RecoHotel></RecoHotel>
            <Cruises></Cruises>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
