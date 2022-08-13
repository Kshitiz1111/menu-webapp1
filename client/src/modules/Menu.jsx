import React from 'react';
import {Link} from "react-router-dom";
import dish from '../assets/dish.PNG'

const Menu = ()=>(

    <div className='flex justify-evenly flex-wrap p-4'>
        <Link to="/starter">
        <div className='row p-6 mb-1 rounded-3xl bg-gray-200'>
            <img className='w-32 rounded-full mb-4' src={dish} alt="" />
            <h2 className='text-center font-semibold'>Starter</h2>       
        </div>
        </Link>
        <Link to="/main">
        <div className='row p-6 mb-1 rounded-3xl bg-gray-200'>
            <img className='w-32 rounded-full mb-4' src={dish} alt="" />
            <h2 className='text-center font-semibold'>Main</h2>      
        </div>
        </Link>
        <Link to="/dessert">
        <div className='row p-6 mb-1 rounded-3xl bg-gray-200'>
            <img className='w-32 rounded-full mb-4' src={dish} alt="" />
            <h2 className='text-center font-semibold'>Dessert</h2>       
        </div>
        </Link>
        <Link to="/drinks">
        <div className='row p-6 mb-1 rounded-3xl bg-gray-200'>
            <img className='w-32 rounded-full mb-4' src={dish} alt="" />
            <h2 className='text-center font-semibold'>Drinks</h2>    
        </div>
        </Link>

      
    </div>

);

export{Menu};