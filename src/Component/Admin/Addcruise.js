import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNavbar from './AdminNavbar';

const Addcruise = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://reservation-system-database.vercel.app/addCruisesr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Cruise added successfully");
                }
            }
            )
    }
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className="mt-5 pt-5 w-50  container">
                <div className="border bg-gray pt-5 mt-5 rounded">

                    <div className="mx-4 px-4 mb-5">
                        <h4 className="text-white">Add new cruise</h4>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <input {...register("title")} className="form-control " placeholder="Name of cruise" />
                            <input {...register("price")} className="form-control my-3" placeholder="Price" />
                            <input {...register("duration")} className="form-control " placeholder="Duration example 2 days 1 night" />
                            <input {...register("img")} className="form-control my-3" placeholder="Image" />
                            <input type="submit" className="btn btn-primary" />
                        </form>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Addcruise;
