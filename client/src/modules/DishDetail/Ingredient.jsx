import React from "react";
import { CustomIngredient } from "./CustomIngredient";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";           
import { closeIng,openOrder} from "../../slice/OpenSingleDish";
import {addExtraIng, addRemoveIng, reset} from '../../slice/CustomizeIng';
const Ingredient = ({selectedDish})=>{
    
    // console.log(removeIngs);
    // console.log(extraIngs);
    const dispatch = useDispatch();
    
    const removeIngs = useSelector((state)=>state.CustomizedIngredients.removeIngs);
    const extraIngs = useSelector((state)=>state.CustomizedIngredients.extraIngs);
    console.log(removeIngs,extraIngs);
    return(
    <>
        <div className="absolute inset-0 bg-gray-400 blur-3xl"></div>
        <div className="absolute inset-x-0 top-28 rounded-xl p-5 m-6 bg-gray-100 shadow-md ">
            <span className="absolute left-5 p-2 rounded-full bg-gray-400 shadow-md" onClick={()=>(dispatch(closeIng()))}>back</span>
            <span className="absolute right-5 font-bold ">{selectedDish.name}</span>
            <div className="mt-16">
                <p><strong>Base Ingredient</strong></p>
                <div className="flex flex-wrap">
                    {
                        
                        <span className="px-2 py-1 text-gray-500" >{selectedDish.baseIngredient}</span>
                        
                    }
                </div>

                <div className="flex justify-between relative">
                    <p><strong>Customizable Ingredient</strong></p>
                    <span onClick={()=>dispatch( reset() )} className="absolute top-0 right-0 py-1 px-2 text-white bg-black rounded-full shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 hover:text-black">reset</span>
                </div>
                <p>you can customized below items according to you preference</p>
                <div className="p-2">
                   <ul>
                        {
                            selectedDish.cusIngredient.map((ingredient,index)=>(
                                <li className="flex my-2" key={index}>
                                    <p className="font-semibold">{ingredient.name}</p>
                                    <div className="px-2">
                                        <span onClick={()=>dispatch( addRemoveIng(ingredient) )} className="px-3 pb-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 " >remove</span> - 
                                        <span onClick={()=>dispatch( addExtraIng(ingredient) )} className="px-3 pb-1 ml-2  rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300" >extra</span>
                                    </div>
                                </li>
                            ))
                           
                        }
                    </ul>
                </div>
                
                <CustomIngredient removeIngs={removeIngs} extraIngs={extraIngs}></CustomIngredient>
                <div>
                    <div>
                        <span className="text-xs">proceed to</span>
                        <div onClick={()=>(dispatch(openOrder()))} className="w-32 font-bold text-xl text-center p-3 rounded-xl bg-gray-400 shadow-md">Order</div>
                    </div>
                </div>
            </div>
        </div>  
    </>
    )
     
}

export{Ingredient};