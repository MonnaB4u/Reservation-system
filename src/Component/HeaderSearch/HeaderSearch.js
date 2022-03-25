import React, { useState } from 'react';
import Cruise from './Cruise/Cruise';
import Flight from './Flight/Flight';
import './HeaderSearch.css'
import Hotel from './Hotel/Hotel';
const HeaderSearch = () => {
    const [Open, setOpen] = useState("Cruise")
    return (
        <div style={{ margintop: "-50px" }} className="container-fluid my-3">
            <div className="d-flex justify-content-center" >
                <div className="border width box-top" style={{ background: "linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95))", }}>
                    <div className="pt-3">
                        <div className="d-flex flex-wrap mx-3">
                            <button onClick={() => setOpen("Cruise")} className={`px-5 py-3 btn-style h6 ${Open === "Cruise" && `open-style`}`}>Cruise</button>
                            <button onClick={() => setOpen("Hotel")} className={`px-5 py-3 btn-style h6 ${Open === "Hotel" && `open-style`}`}>Hotel</button>
                            <button onClick={() => setOpen("Flight")} className={`px-5 py-3 btn-style h6 ${Open === "Flights" && `open-style`}`} >Flights</button>
                        </div>

                        <div className="text-center mt-3 flex-wrap">
                            {Open === "Cruise" && <Cruise></Cruise>}
                            {Open === "Hotel" && <Hotel></Hotel>}
                            {Open === "Flight" && <Flight></Flight>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSearch;
