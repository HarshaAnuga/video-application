import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const HomePage= () =>{
    const [roomcode,setRoomcode]=useState("");
    const navigate = useNavigate();
    const handleFormSubmit=(ev)=>{
        ev.preventDefault();
        navigate(`/room/${roomcode}`);
    }
    return(
        <div className="home-page">
            
            <form onSubmit={handleFormSubmit} className="form">
                <div>
                    <label>Enter Room code</label>
                    <input value={roomcode} onChange={(e)=> setRoomcode(e.target.value)} 
                    type="text" 
                    placeholder="Enter Room code"></input>
                </div>
                <button type="submit">Enter Room</button>
            </form>

        </div>
    );
}

export default HomePage;