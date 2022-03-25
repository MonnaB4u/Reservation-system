import React, { useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuth from './Firebase/firebase.initialize';
import './Login.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Navbar from '../Component/Navbar/Navbar';

const provider = new GoogleAuthProvider();
initializeAuth();

const Login = () => {
    const [loggedInusers, setLoggedInUsers] = useContext(UserContext);

    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    console.log("login", loggedInusers)
    const navigate = useNavigate()
    const [logUser, setlogUser] = useState({})

    const handleLogin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                let user = {
                    loggedInusers:true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                }
                setLoggedInUsers(user);
                setlogUser(user);
                navigate(from)
            })
            .catch(err => {
                alert(err.message)
            })
    }

    const auth = getAuth();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setLoggedInUsers({});
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className=" m-5 col-sm pt-5 text-center">
                    {/* <EmailPassLogin></EmailPassLogin> */}

                </div>
                <div className="col-sm text-center pt-5">
                                     <h1>Please Login First Before Book our services. Thank You :)</h1>
                    {
                        !loggedInusers.name ?

                            <button className="btn bg-success mb-2 text-white w-25" onClick={() => handleLogin()}> Google</button>

                            :
                            <button className="btn bg-danger w-25" onClick={() => handleSignOut()}>Google Sign Out</button>
                    }

                    {/* <GithubLogin></GithubLogin> */}
                    <br />
                    {
                        logUser.email &&
                        <div>
                            <h1>WellCome {loggedInusers.name}</h1>
                            <p>Your Email is:-- <a href="">{loggedInusers.email}</a></p>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Login;
