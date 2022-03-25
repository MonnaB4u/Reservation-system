import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import { GiWaterRecycling } from "react-icons/gi";
import { ImCheckmark } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import './myorder.css'

const MyOrder = () => {
    const [loggedInUser, setLoggedInUsers] = useContext(UserContext);

    const [order, setOrder] = useState([])

    const navigate = useNavigate()

    console.log(order)

    useEffect(() => {
        const url = `http://localhost:5000/OrderCollectionbyEmail?email=${loggedInUser.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [loggedInUser.email])


    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/OrderCollection/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(datas => {
                    if (datas.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = order.filter(user => user._id !== id)
                        setOrder(remaining)
                    }
                })
        }
    }



    return (
        <div className="">
            <Navbar></Navbar>
            <div className="pt-5 container">
                <h4 className="pt-5">Hello : {loggedInUser.name}. {order.length===0 ? "You have reserved nothing, Feel free to reserve our facilityes , we will give give you the best services" : "You have reserved these facilityes"} </h4>
                {
                    order.length===0 &&
                    <div className="empty">
                        <h1>Empty</h1>
                    </div>

                }
                <div className=" mt-5">
                    {
                        order.map((each, i) =>
                            <div className="col-md">
                                <div className={`d-flex justify-content-around form-control my-3 ${each.status === "pending" ? "bg-gray" : "bg-success"}`}>

                                    <div className="m-3">
                                        <img src={each.img} className="img-fluid orderimg " alt="" />
                                    </div>

                                    <div className="m-3 text-white">
                                        <h6>{each.title}</h6>
                                        <h6>Price: ${each.price}</h6>
                                        <h6>Address : {each.address}</h6>
                                    </div>

                                    <div className="m-3 text-white">
                                        <h6>{each.name}</h6>
                                        <h6>{each.email}</h6>
                                    </div>

                                    <div className="m-3">
                                        {
                                            each.status === "pending" ? <button className="btn btn-warning navimg mx-3"> <h6>  <GiWaterRecycling className="inline-block ml-1" /> {each.status}</h6></button>
                                                :
                                                <button className="btn btn-success navimg">  <h6>   <ImCheckmark className="inline-block ml-1 " /> Approve</h6></button>


                                        }
                                        <button className="btn btn-danger navimg" onClick={() => handleDeleteUser(each._id)}>Cancel</button>
                                    </div>
                                </div>

                            </div>

                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
