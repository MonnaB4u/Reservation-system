import React, { useEffect, useState } from 'react';
import datas from '../Data/Hotel'
import './RecoHotel.css'
import { MdOutlineFlight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const RecoHotel = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const url = `https://reservation-system-database.vercel.app/HotelCollection`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="container my-5">
            <h3 className="new4">Recommend Hotel</h3>
            <div className="d-flex ">
                <MdOutlineFlight className="rotated" />
                <hr className="new4 mt-4" />
            </div>
            <div className="row d-flex justify-content-between ">
                {
                    data.slice(0, 6).map((item, i) =>
                        <>
                            <div className=" col-md-4 my-3 recosha">
                                <div className="">
                                    <img src={item.img} className="img-fluid recoImg" alt="" />
                                </div>
                                <div className="col-md reco-bg recoCard">
                                    <div className="pb-3">
                                        <h4 className="mx-2
                                        ">{item.title}</h4>
                                        <p className="text-lightBlue font-bold mx-2 c-darkBlue h6">{item.price}</p>
                                        <p className="mx-2"> {item.details}</p>
                                        <div className="d-flex justify-content-between">
                                            <button onClick={() => navigate(`/allHotel`)} className="service-btn h5 mx-2 py-1">See all</button>
                                            <button onClick={() => navigate(`/order/${item._id || item.id}`)} className="bg-danger service-btn h5 mx-2 py-1" > Book  </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default RecoHotel;
