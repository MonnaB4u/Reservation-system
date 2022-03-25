import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import datas from '../Data/HotelAll'
import Navbar from '../Navbar/Navbar';
import { FaHotel } from "react-icons/fa";
import './vallho.css'

const VisitAllHotel = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const url = `https://hidden-cove-26759.herokuapp.com/AllHotelCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
console.log(data)
    const navigate = useNavigate()
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container mt-5 pt-5">
                <h2 className="new4">Our Hotel Services</h2>

                <div className="d-flex mb-4">
                      <FaHotel className="rotated2" />
                    <hr className="new4 mt-4" />
                </div>
                <div className="row grid">

                    {
                        data.map((each, i) =>
                            <>
                                <div className="" >
                                    <img src={each.photo} className="img-fluid imgborder" alt="" />
                                    <div className="cur-card-bg imgborder2">
                                        <div className="cruisep mt-3">
                                            <p className='mx-3 mb-1 h5 '>{each.title}</p>
                                            <p className='h6 mx-3'>{each.description}</p>
                                        </div>
                                        <div className="d-flex text-center justify-content-between">
                                            <div className="d-flex text-center">

                                                <p className="uppercase h6">{each.duration}</p>
                                            </div>
                                            <p className="text-lightBlue font-bold mx-3 c-darkBlue h6">${each.price}</p>
                                        </div>
                                        <div className="text-white mb-3 mt-2 d-flex text-center justify-content-between border">
                                            <button className="bg-darkBlue text-white mx-3 border rounded-full btn" > See Details </button>
                                            <button onClick={() => navigate(`/order/${each._id}`)} className="bg-orange text-white  mx-3 rounded-full btn" > Book  </button>
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

export default VisitAllHotel;
