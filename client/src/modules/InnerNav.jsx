import React from "react";  
import { NavLink } from "react-router-dom";
import cartlistbtn from '../assets/cartlist.PNG';


const InnerNav = ({orderListToggleHandler})=>{

    return(
        <div className="flex justify-between w-screen bg-white border-b-2 p-4">
            <NavLink to='/'>
                back
            </NavLink>
            <span className="font-semibold">Starter</span>
            
            <img onClick={orderListToggleHandler} src={cartlistbtn} className='w-10' alt="cartlist" />
            
        </div>
    )
}

export{InnerNav}