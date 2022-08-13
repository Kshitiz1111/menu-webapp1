import React from "react";
import dishImg from "../assets/dish.PNG"
import { useDispatch } from "react-redux";
import {openDish} from '../slice/OpenSingleDish';


const Dish = ({dishes,maxSize})=>{
    const dispatch = useDispatch();

    return(
        <>
        
        <div className='flex flex-wrap justify-evenly p-4 z-10'>
            {

            dishes.slice(0,maxSize).map((item)=>(
                <div className="relative m-1 p-3" key={item.id} onClick={()=>dispatch(openDish(item))}>
                    <span className="absolute -top-2 -left-1 text-xs rounded-md bg-gray-300 px-1">Rs: {item.price}</span>
                    <img src={dishImg} className='w-20 rounded-full' alt="" />
                    <h3 className="text-center">{item.name}</h3>
                </div>
            ))
            
            }
        </div>
        </>
    )
}
export{Dish};