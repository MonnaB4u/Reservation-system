import { Transition } from '@headlessui/react';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Nav.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [loggedInUser, setLoggedInUsers] = useContext(UserContext);

    const handleSignOut = (e) => {
        localStorage.removeItem("name");
        e.preventDefault();
    }

    return (
        <div className="w-full">
            <nav class="navbar navbar-expand-lg navbar-light bg-gray fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand mx-5" href="#"> <h2 className="text-orange font-bold">
                        <span className="text-darkBlue">Travel </span>Vila
                    </h2></a>
                    <button class="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml mx-5" >
                            <a class="nav-link active h5 mx-3 text-white hv" aria-current="page" href="/">Home</a>
                            <a class="nav-link h5 mx-3 text-white hv" href="#">Features</a>
                            <a class="nav-link h5 mx-3 text-white hv" href="#">Pricing</a>
                            {
                                loggedInUser.name &&
                                <a class="nav-link h5 mx-3 text-white hv" href="/myOrder">myOrder</a>

                            }
                             {
                                loggedInUser.name &&
                                <a class="nav-link h5 mx-3 text-white hv" href="/adminManageOrder">ManageOrder</a>

                            }
                            {
                                loggedInUser.email ?
                                    <a onClick={() => handleSignOut()} class="nav-link h5 mx-3 text-white hv" href="">Logout</a>
                                    :
                                    <a class="nav-link h5 mx-3 text-white hv" href="/login">Login</a>

                            }

                            <img src={loggedInUser.photoURL} className="img-fluid navimg" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
