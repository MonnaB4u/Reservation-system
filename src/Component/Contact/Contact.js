import React from 'react';
import './Contact.css'
import { MdOutlineFlight } from "react-icons/md";

const Contact = () => {
    return (
        <div className='contact-banner mt-5'>
            <div className="container">
                <div className="row ">
                    <div className="col-md-5 mt-5 pt-4 mx-5">
                        <img src="https://i.ibb.co/9pb4wp3/contact-Img.jpg" className='img-fluid mt-5 contact-img' alt="" />
                    </div>
                    <div className="col-md-5 mt-5 pt-4 px-5 mx-4">

                            <h3 className="new4">Contact with us</h3>
                            <div className="d-flex my-2">
                                <MdOutlineFlight className="rotated" />
                                <hr className="new4 mt-4" />
                            </div>
                            <div className="d-flex flex-column">
                                <label className="text-lightblue h5" htmlFor="">Name</label>
                                <input type="text" className="form-control input-sm " />
                            </div>
                              <div className="d-flex flex-column my-3">
                                <label className="text-lightblue h5" htmlFor="">Email</label>
                                <input type="text" className="form-control input-sm"/>
                            </div>
                              <div className="d-flex flex-column">
                                <label className="text-lightblue h5" htmlFor="">Message</label>
                                <textarea type="text" className="form-control input-sm"/>
                            </div>

                              <div className="d-flex flex-column my-3 ">
                                <button className="btn btn-lightblue text-white"><h5 className="mt-2">Send</h5></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Contact;
