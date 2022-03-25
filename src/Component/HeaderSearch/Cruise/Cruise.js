import React from 'react';
import './Cruise.css'
const Cruise = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center flex-wrap my-3">

                <div className="d-flex flex-column ">
                    <label className='text-start mx-4' htmlFor="">Destination</label>
                    <input className='mx-3 input-style px-3 py-2' type="text" />
                </div>

                <div className="d-flex flex-column">
                    <label className='text-start mx-4' htmlFor="">Date</label>
                    <input className='mx-3 input-style px-3 py-2' type="date" />
                </div>

                <div className="d-flex flex-column">
                    <label className='text-start mx-4' htmlFor="">Course Type</label>
                    <select
                        className="mx-3 input-style px-3 py-2 "
                    >
                        <option value="">Select a option</option>
                        <option value="">1-2 Seats</option>
                        <option value="">2-3 Seats</option>
                        <option value="">3-4 Seats</option>
                    </select>
                </div>

             <div className="d-flex flex-column">
                    <button style={{ borderRadius: " 50px" }} className="btn mt-3 border px-4 text-white rounded-full  course-btn"> <h5 className="mt-1">Search</h5> </button>
             </div>
            </div>
        </div>
    );
};

export default Cruise;
