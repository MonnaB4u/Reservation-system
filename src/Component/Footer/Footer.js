import React from 'react';
import './Footer.css'
import { AiFillHeart } from "react-icons/ai";
import {
    BsFacebook,
    BsGithub,
    BsLinkedin,
    BsPaypal,
    BsTwitter,
} from "react-icons/bs";
import {
    FaCcDiscover,
    FaCcJcb,
    FaCcMastercard,
    FaCcVisa,
    FaEnvelope,
} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const Footer = () => {
    return (
        <div className="footer-bg ">
            <div className="container ">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <h2 className="text-orange font-bold mt-4">
                            <span className="text-darkBlue">Travel </span>Vila
                        </h2>
                        <p className="h6 text-white">Join us on a Villa Park Stadium Tour and Step behind the scenes, soak up the atmosphere and walk in the footsteps of your Villa heroes in an unforgettable</p>
                        <div className="d-flex">
                            <BsFacebook className="h4 text-white bg-dark" />
                            <BsGithub className="mx-3 h4 text-white bg-dark" />
                            <BsTwitter className="h4 text-white bg-dark" />
                            <BsLinkedin className="mx-3 h4 text-white bg-dark" />
                        </div>
                    </div>
                    <div className="col-md-3 mx-5 mt-5 d-flex justify-content-center ">
                        <div className="">
                            <h4 className='mt-4 h2 text-white'>Quick Links</h4>
                            <li className="h6 text-white text-start">
                                <MdNavigateNext /> Terms & Conditions
                            </li>
                            <li className="h6 text-white">
                                <MdNavigateNext /> About Us
                            </li>
                            <li className="h6 text-white">
                                <MdNavigateNext /> Latest News
                            </li>
                            <li className="h6 text-white">
                                <MdNavigateNext /> Subscribe
                            </li>
                            <li className="h6 text-white">
                                <MdNavigateNext /> Our policies
                            </li>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 d-flex justify-content-center ">
                        <div className="">
                            <h4 className="mt-4 text-white">Newsletter</h4>
                            <p className="text-white">Join us on a Villa Park Stadium Tour and Step behind the scenes.</p>
                            <div class="input-icons">
                                <FaEnvelope className="i" />
                                <input class="text-white input-field text-center bg-transparent form-control w-75 inborder" placeholder="Your Email" type="text" />
                                <button className="btn ff-btn w-75 my-2 "><h5>Subscribe</h5></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
