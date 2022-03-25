import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Ordercart.css'
import Googlemap from '../GoogleMap/Googlemap';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';

const OrderCart = () => {
    const [cruise, setData] = useState([])
    const { id } = useParams()
    const [loggedInUser, setLoggedInUsers] = useContext(UserContext);
    useEffect(() => {
        const url = `https://hidden-cove-26759.herokuapp.com/CruisesCollection/${id}`
        const url2 = `https://hidden-cove-26759.herokuapp.com/HotelCollection/${id}`
        const url3 = `https://hidden-cove-26759.herokuapp.com/AllHotelCollection/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(url2)
            .then(res => res.json())
            .then(data => setData(data))

        fetch(url3)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
        const newData = { ...cruise };
        newData.name = data.name;
        newData.email = data.email;
        newData.address = data.address;
        newData.status = "pending";
        delete newData._id;

        fetch('https://hidden-cove-26759.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Booking successfully, Wait for owner approved");
                    navigate('/myOrder')
                }
            }
            )
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 py-4">
                <div className="container pt-5 pb-3 order-bg mt-5 d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="mb-5 pb-5">
                                <Googlemap ></Googlemap>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 mx-4">
                            <div className="">
                                <img src={cruise.img || cruise.photo} className="img-fluid" alt="" />
                                <h3 className="new4">{cruise.title}</h3>

                                <div className="d-flex justify-content-between col-md h5">
                                    <p>Your Ordered Package:</p>
                                    <p>X 1</p>
                                </div>

                                <div className=" col-md h5 d-flex justify-content-between">
                                    <p>Your Total Cost:</p>
                                    <p>{cruise.price}</p>
                                </div>

                                <small className="italic">{cruise.description}</small>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="">
                                <h3 className="new4">Hello {loggedInUser.name}</h3>
                                <small className="text-gray italic text-success">Your are logged in as: {loggedInUser.name} </small>
                                <h5 className="border-order">Bill to the same address</h5>

                                <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                                    {/* <input {...register("firstName")} /> */}

                                    <div className="d-flex flex-column">
                                        <label className='text-start mx-4 h6' htmlFor="">Name</label>
                                        <input className=' input-style px-3 py-2 new4' value={loggedInUser.name} type="text" {...register("name")} required />
                                    </div>

                                    <div className="d-flex flex-column">
                                        <label className='text-start mx-4 h6' htmlFor="">Email</label>
                                        <input className='input-style px-3 py-2 new4' value={loggedInUser.email} {...register("email")} required type="text" />
                                    </div>

                                    <div className="d-flex flex-column">
                                        <label className='text-start mx-4 h6' htmlFor="">Address</label>
                                        <input className='input-style px-3 py-2' placeholder="please enter your address" {...register("address")} required type="text" />
                                    </div>

                                    <button type="submit" className="btn or-btn w-100 my-2"><h5>Subscribe</h5></button>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCart;
