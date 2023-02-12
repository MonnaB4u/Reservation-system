import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Admin/AdminNavbar';


const AdminManageOrder = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const url = 'https://reservation-system-database.vercel.app/OrderCollection'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://reservation-system-database.vercel.app/OrderCollection/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(datas => {
                    if (datas.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = data.filter(user => user._id !== id)
                        setData(remaining)
                    }
                })
        }
    }


    /////////////Update/////
    const [user, setUser] = useState({ status: "approved" })
    const updateOrder = (id) => {
        console.log(user)
        fetch(`https://reservation-system-database.vercel.app/OrderCollection/${id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ user }),

            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successfully')
                    window.location.reload()
                }
            })
    };
    return (
        <div>
           <AdminNavbar></AdminNavbar>
            <div className=" mt-5 container pt-5">
                {
                    data.map((each, i) =>
                        <div className="col-md">
                            <div className={`d-flex justify-content-around form-control my-3 ${each.status === "pending" ? "bg-gray" : "bg-success"}`}>
                                 <div className="m-3 orderindex" style={{background:"gray", borderRadius:"40px" }}>
                                    <h4 className="m-4 text-white ">{i+1}</h4>
                                </div>
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
                                <div className="m-3 ">
                                    <button onClick={() => handleDeleteUser(each._id)} className={`btn bg-danger  navimg ${each.status !== "approve" && "bg-warning"} `}> <h6>Delete</h6></button>

                                    <button onClick={() => updateOrder(each._id)} className="btn btn-success navimg mx-2">  <h6> Approved</h6></button>

                                </div>
                            </div>

                        </div>

                    )

                }
            </div>
        </div>
    );
};

export default AdminManageOrder;
