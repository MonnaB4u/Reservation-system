import React, { useContext } from 'react';

import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
import { UserContext } from '../App';



const PrivateRoute = () => {
    const [loggedInUser, setLoggedInUsers] = useContext(UserContext);
    const location = useLocation()
    return loggedInUser.email ? <Outlet /> : <Navigate to='/login' replace state={{from: location}}/>

};

export default PrivateRoute;
