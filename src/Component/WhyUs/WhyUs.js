import React from 'react';
import './WhyUs.css'
import { AiOutlineCustomerService } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import { MdOutlineFlight } from "react-icons/md";

const WhyUs = () => {
    return (
        <div className="wus-header">
            <div className="container-fluid bgwyus pt-4">
                <div className="row ">
                    <div className="col-md">
                        <div className="text-center">
                            <p className="text-danger h1 pt-5  ">Why Choose Us</p>
                            <div className="d-flex justify-content-center">
                                <MdOutlineFlight className="rotated" />
                                <hr className="new4 mt-4" />
                            </div>
                            <div className="d-flex justify-content-center mx-5">
                                <div className="col-md-7 text-start  mt-4">
                                    <div className="d-flex px-5">
                                        <FaServer className="text-darkBlue mx-2 h4 " />
                                        <p className="h5 text-darkBlue">Personalize Service</p>
                                    </div>
                                    <div className="d-flex mx-5">
                                        <AiOutlineCustomerService className="mx-2 h4  text-darkBlue" />
                                        <p className="h5 text-darkBlue">24/7x Customer Services</p>
                                    </div>
                                    <div className="d-flex  mx-5">
                                        <BiDollar className="mx-2 h4  text-darkBlue" />
                                        <p className="h5 text-darkBlue">Best Pricing</p>
                                    </div>
                                    <div className="d-flex mx-5">
                                        <IoIosLaptop className="mx-2 h4 text-darkBlue" />
                                        <p className="h5 text-darkBlue">Trusted Company</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full text-darkBlue">
                                <button className="btn mt-4 ml-14">See Packages</button>
                            </div>
                        </div>

                    </div>

                    <div className="col-md col-sm-6 col-lg-6 pt-5 text-center">
                        <img src="https://i.ibb.co/q5cXwzZ/banner-1.jpg" className="img-fluid sideImg " alt="" />
                    </div>

                </div>

            </div>
        </div>


    );
};

export default WhyUs;
