import React, { useState } from 'react';
import './Services.css'
import { MdOutlineFlight } from "react-icons/md";
import './Services.css'
import { useNavigate } from 'react-router-dom';

const services = [
    {
        title: "Book Hotel",
        img: "https://i.ibb.co/fkGFqfK/hotel.png",
        details:
            "Cheap hotels guests love in Dhaka · Hotel Sarina · Rafflesia Serviced Apartments · Holiday Xpress · Hotel As Shams International · Hotel Dhaka Garden Inn.",
    },
    {
        title: "Flight Service",
        img: "https://i.ibb.co/QmVs7p5/flight.png",
        details:
            "Flight or flying is the process by which an object moves through a space without contacting any planetary surface, either within an atmosphere or through the vacuum of outer space.",
    },
    {
        title: "Enjoy Cruise",
        img: "https://i.ibb.co/1qfMLmN/cruise.jpg",
        details:
            "Carnival cruise deals and cruise packages to the most popular destinations. Find great deals and specials on Caribbean, The Bahamas, Alaska, and Mexico ....",
    },
    {
        title: "Hire Car",
        img: "https://i.ibb.co/jfFmxbG/car.jpg",
        details:
            "Cheap hotels guests love in Dhaka · Hotel Sarina · Rafflesia Serviced Apartments · Holiday Xpress · Hotel As Shams International · Hotel Dhaka Garden Inn.",
    },
];

const Services = () => {
    const [data, setData] = useState(services)
    const navigate= useNavigate()
    return (
        <div className="container my-4">
            <h2 className="new4">Services We Offer</h2>
            <div className="d-flex ">
                <MdOutlineFlight className="rotated" />
                <hr className="new4 mt-4" />
            </div>

            <div className="row  ">
                <div className="d-flex col-md-6 col-sm-6 col-lg-6" >
                    <div className="img-hover-zoom">
                        <img src="https://i.ibb.co/fkGFqfK/hotel.png" className=" service-img img-fluid " alt="" />
                    </div>
                    <div className="col-md-6  col-md-6 m-3 pt-4">
                        <h3>Book Hotel</h3>
                        <p>Cheap hotels guests love in Dhaka · Hotel Sarina · Rafflesia Serviced Apartments · Holiday Xpress · Hotel As Shams International · Hotel Dhaka Garden Inn.</p>
                        <button onClick={() => navigate(`/allHotel`)} className="service-btn h5">See all</button>
                    </div>
                </div>
                <div className="d-flex col-md-6 col-sm-6 col-lg-6" >
                    <div className="img-hover-zoom">
                        <img src="https://i.ibb.co/1qfMLmN/cruise.jpg" className=" service-img img-fluid " alt="" />
                    </div>
                    <div className="col-md-6  col-md-6 m-3 pt-4">
                        <h3>Enjoy Cruise</h3>
                        <p>"Carnival cruise deals and cruise packages to the most popular destinations. Find great deals and specials on Caribbean, The Bahamas, Alaska, and Mexico</p>
                        <button onClick={() => navigate(`/allCruise`)}  className="service-btn h5">See all</button>
                    </div>
                </div>

                <div className="d-flex col-md-6 col-sm-6 col-lg-6" >
                    <div className="img-hover-zoom">
                        <img src='https://i.ibb.co/QmVs7p5/flight.png' className=" service-img img-fluid " alt="" />
                    </div>
                    <div className="col-md-6  col-md-6 m-3 pt-4">
                        <h3>Flight Service</h3>
                        <p>Flight or flying is the process by which an object moves through a space without contacting any planetary surface, either within an atmosphere or through the vacuum of outer space.</p>
                        <button className="service-btn h5">See all</button>
                    </div>
                </div>

                <div className="d-flex col-md-6 col-sm-6 col-lg-6" >
                    <div className="img-hover-zoom">
                        <img src='https://i.ibb.co/jfFmxbG/car.jpg' className=" service-img img-fluid " alt="" />
                    </div>
                    <div className="col-md-6  col-md-6 m-3 pt-4">
                        <h3>Hire Car</h3>
                        <p>Cheap hotels guests love in Dhaka · Hotel Sarina · Rafflesia Serviced Apartments · Holiday Xpress · Hotel As Shams International · Hotel Dhaka Garden Inn.</p>
                        <button className="service-btn h5">See all</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;
