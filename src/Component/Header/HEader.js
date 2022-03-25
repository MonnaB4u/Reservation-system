import React from 'react';
import './Header.css'
import { BiDollar } from "react-icons/bi";
import { BsHeadset, BsLaptop, BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { RiShipFill } from "react-icons/ri";
import ReactTyped from 'react-typed';

const HEader = () => {

    return (
        <div className="banner text-white">
            <div className="">
                <div className="banner2">
                    <h1 className="text-white"> Finest Luxury <span className="lightblue h1 ">Cruise</span> <span className="text-white h1 ">in Moritz!</span> </h1>
                </div>
                <ul className="">
                    <li className="h5"> <GoLocation className="text-orange mx-3" /> Over 100 Cruises Spot</li>
                    <li className="h5">
                        <BsLaptop className="text-orange mx-3" />
                        Easy Booking
                    </li >
                    <li className="h5"><BiDollar className="text-orange mx-3" />
                        Best Prices</li>
                    <li className="h5">
                        <BsHeadset className="text-2xl text-orange mx-3" />
                        24/7 Customer Care
                    </li>
                    <button className="bg-orange text-white btn px-3 py-2  mt-3 mx-3">
                        <BsPerson className="inline-block m-2 text-start" /> About Us
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default HEader;
