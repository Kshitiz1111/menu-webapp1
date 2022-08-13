import React, { useCallback } from "react";
import dishImg from '../../assets/dish.PNG'
import { useDispatch } from "react-redux";
import {closeAllDishCard,openIng,openOrder} from '../../slice/OpenSingleDish';
import { reset } from "../../slice/CustomizeIng";

const DishDisplay = ({selectedDish})=>{ 
    const dispatch = useDispatch();

    const close = ()=>{
        dispatch(closeAllDishCard());
        dispatch(reset());
    }

    return(
    <>
        <div className="absolute inset-0  bg-gray-400 blur-3xl"></div>
        <div className="absolute inset-x-0 top-28 rounded-xl p-5 m-6 bg-gray-100 shadow-md">
            <span className="absolute left-5 p-2 rounded-full bg-gray-200 shadow-inner">Rs:{selectedDish.price}</span>
            <span className="absolute right-5 p-2 rounded-full bg-gray-400 shadow-md" onClick={close}>close</span>
            <img src={dishImg} className="w-3/4 rounded-full mx-auto  mt-14 mb-5" alt="" />
            <h2 className="text-center break-words text-xl mb-5">{selectedDish.name}</h2>
            <div className="flex justify-evenly flex-wrap">
            
                <div>
                    <span className="text-xs" >customize</span>
                    <div className="w-32 font-bold text-xl text-center p-3 rounded-xl bg-gray-400 shadow-md" onClick={()=>dispatch(openIng())}>Ingredient</div>
                </div>
                <div>
                    <span className="text-xs">proceed to</span>
                    <div className="w-32 font-bold text-xl text-center p-3 rounded-xl bg-gray-400 shadow-md" onClick={()=>dispatch(openOrder())}>Order</div>
                </div>

            </div>
        </div>
    </>    
)}

export{DishDisplay};