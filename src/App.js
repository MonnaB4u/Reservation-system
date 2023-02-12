import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import OrderCart from './Component/OrderCart/OrderCart';
import Login from './Login/Login';
import { createContext, useEffect, useState } from 'react';
import MyOrder from './Component/myOrder/MyOrder';
import AdminManageOrder from './Component/AdminManageOrder/AdminManageOrder';
import VisitAllHotel from './Component/VisitAllHotel/VisitAllHotel';
import Cruises from './Component/Cruise/Cruises';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Admin from './Component/Admin/Admin';
import AddHotel from './Component/Admin/AddHotel';
import Addcruise from './Component/Admin/Addcruise';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUsers] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  return (
    <div className="">
      <UserContext.Provider value={[loggedInUser, setLoggedInUsers]}>
        <BrowserRouter>
          <Routes>
            < Route path='/' element={<Home></Home>} />
            <Route element={<PrivateRoute />}>
              <Route path='/order/:id' element={<OrderCart />} />
              <Route path='/myOrder' element={<MyOrder></MyOrder>} />
              <Route path='/adminManageOrder' element={<AdminManageOrder></AdminManageOrder>} />
              <Route path='/allHotel' element={<VisitAllHotel></VisitAllHotel>} />
              <Route path='/allCruise' element={<Cruises />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/AddHotel' element={<AddHotel />} />
              <Route path='/AddCruise' element={<Addcruise />} />
            </Route>
            <Route path='/login' element={<Login />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
