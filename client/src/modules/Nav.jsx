import React from 'react';
import logo from '../assets/brandlogo.PNG';
import cartlistbtn from '../assets/cartlist.PNG';


const Nav = ({orderListToggleHandler})=>{

    return(
       <div className='flex justify-between w-screen bg-white border-b-2 p-4'>
        <div className='flex'>
            <img src={logo} className='w-10' alt="brandlogo" />
            <p className='ml-2 self-end'>Sample cafe</p>
        </div>
        <div onClick={orderListToggleHandler}>
            <img src={cartlistbtn} className='w-10' alt="cartlist" />
        </div>
       </div>
    );

}

export{ Nav };