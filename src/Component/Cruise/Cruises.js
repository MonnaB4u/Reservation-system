import React, { useEffect, useState } from 'react';
import datas from '../Data/Hotel'
import { GiCruiser } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import './cruise.css'
import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar/Navbar';

const Cruises = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const url = `http://localhost:5000/CruisesCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])




    return (
        <div className="">
        <Navbar></Navbar>
        <div className="container mb-5 pt-3">
            <h2 className="new4">Our Cruises Services:</h2>
            <div className="d-flex mb-4">
                <GiCruiser className="rotated2" />
                <hr className="new4 mt-4" />
            </div>
            <div className="row grid">

                {
                    data.slice(0, 12).map((each, i) =>
                        <>
                            <div className="" >
                                <img src={each.img} className="img-fluid imgborder" alt="" />
                                <div className="cur-card-bg imgborder2">
                                    <div className="cruisep mt-3">
                                        <p className='mx-3 mb-1 h5 '>{each.title}</p>
                                        <p className='h6 mx-3'>{each.description}</p>
                                    </div>
                                    <div className="d-flex text-center justify-content-between">
                                        <div className="d-flex text-center">
                                            <BsClock className='mt-1 mx-3' />
                                            <p className="uppercase h6">{each.duration}</p>
                                        </div>
                                        <p className="text-lightBlue font-bold mx-3 c-darkBlue h6">${each.price}</p>
                                    </div>
                                    <div className="text-white mb-3 mt-2 d-flex text-center justify-content-between border">
                                        <button className="bg-darkBlue text-white mx-3 border rounded-full btn" > See Details </button>
                                        <button onClick={() => navigate(`/order/${each._id || each.id}`)} className="bg-orange text-white  mx-3 rounded-full btn" > Book  </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>


        </div>
        </div>

    );
};

export default Cruises;
