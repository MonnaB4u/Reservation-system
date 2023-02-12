import React, { useContext } from 'react';
import { UserContext } from '../../App';
import AdminNavbar from './AdminNavbar';


const Admin = () => {
        const [loggedInUser, setLoggedInUsers] = useContext(UserContext);
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className="container">
                <div className="text-center pt-5 mt-5">
                   <h1>Hello: {loggedInUser.name}</h1>
                   <h4>WellCome to the Admin Page</h4>
                </div>
            </div>
        </div>
    );
};

export default Admin;
