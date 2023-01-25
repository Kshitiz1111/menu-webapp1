import React from "react";
import { CustomIngredient } from "./DishDetail/CustomIngredient";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder,editOrder,replaceIngs } from "../slice/OrderList";
import { setIngsToEdit } from "../slice/CustomizeIng";
import {addExtraIng, addRemoveIng, reset} from "../slice/CustomizeIng";

const Orders = ({orders})=>{
    const dispatch = useDispatch();
    // let removeIngs = useSelector((state)=>state.CustomizedIngredients.removeIngs);
    // let extraIngs = useSelector((state)=>state.CustomizedIngredients.extraIngs);

    const orderActiveToEdit = useSelector((state)=>state.HandleOrder.orderActiveToEdit);
    const extraCustomizeSlice = useSelector((state)=>state.CustomizedIngredients.extraIngs);
    const removeCustomizeSlice = useSelector((state)=>state.CustomizedIngredients.removeIngs);
    
    function dispatchIngsToEdit(item){
        dispatch( editOrder( {itemId: item.id, activeStatus: orderActiveToEdit.status} ) );
        //send ings to into customizeIng slide
        if(orderActiveToEdit.status === "edit"){
            dispatch(setIngsToEdit({extraIng: item.extraIngs,removeIng: item.removeIngs}));
        }
        if(orderActiveToEdit.status === "done"){
            dispatch(reset());
        }
    }

    function updateIngs(item,ingredient,button,quantity){
        if(button === "remove" ){
           
            dispatch(addRemoveIng(ingredient));
            console.log("   ")
            console.log("removeINg before");
            console.log(removeCustomizeSlice);
            //replace
            dispatch(replaceIngs({order: item, btn: button, removeIng: removeCustomizeSlice, extraIng: extraCustomizeSlice,quantity: item.quantity}));
            
            console.log("removeINg after");
            console.log(removeCustomizeSlice);
            console.log("   ")
        }
        if(button === "extra"){
            
            dispatch(addExtraIng(ingredient));
            console.log("   ")
            console.log("ExtraINg before");
            console.log(extraCustomizeSlice);
            //replace
            dispatch(replaceIngs({order: item, btn: button, removeIng: removeCustomizeSlice, extraIng: extraCustomizeSlice,quantity: item.quantity}));
            console.log("ExtraINg after");
            console.log(extraCustomizeSlice);
            console.log("   ")
        }
        if(button === "reset"){
          
            dispatch(reset());
            console.log("removeINgandExtraINg");
            console.log(removeCustomizeSlice,extraCustomizeSlice);
             //replace
             dispatch(replaceIngs({order: item, btn: button, removeIng: removeCustomizeSlice, extraIng: extraCustomizeSlice,quantity: item.quantity}))
            
        }
        if(button === "quantity"){
            dispatch(replaceIngs({order: item, btn: button, removeIng: removeCustomizeSlice, extraIng: extraCustomizeSlice,quantity: quantity}))
        }

    }



    return (
        <div>
        {
            orders.map((item)=>{
                return(
                    <div className="bg-gray-100 p-3 m-2 rounded-xl" key={item.id}>
                        <div className="flex flex-wrap justify-between">
                            <p className="break-all"><strong>{item.name}</strong></p>
                            <div>
                                <span onClick={()=>dispatch(deleteOrder(item.id))} className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300">delete</span>
                                {
                                    (orderActiveToEdit.id === item.id ) ? <span onClick={()=>dispatchIngsToEdit(item)} className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 ml-5">{orderActiveToEdit.status}</span> 
                                    :<span onClick={()=>dispatchIngsToEdit(item)} className="px-2 py-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 ml-5">edit</span>
                                }
                               
                            </div>
                        </div>
                        <div className="px-3">
                            
                            {
                            (orderActiveToEdit.status !== "edit" && (orderActiveToEdit.id === item.id ))?
                            <>
                            {/* revisit */}
                                <span className="">quantity: <input onChange={(e)=>dispatch(updateIngs(item,"","quantity",e.target.value,item.price))} type="number" className='w-14 border border-black rounded-lg'/></span>
                                
                                {
                                (item.extraIngs.length > 1 || item.removeIngs.length > 0)?
                                <>
                                    <div className="flex justify-between relative">
                                        <p><strong>Customizable Ingredient</strong></p>
                                        <span onClick={()=>updateIngs(item," ","reset",item.quantity,item.price)} className="absolute top-0 right-0 py-1 px-2 text-white bg-black rounded-full shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 hover:text-black">reset</span>
                                        </div>
                                        <p>you can customized below items according to you preference</p>
                                        <div className="p-2">
                                        <ul>
                                            {
                                        //
                                            item.customIngredient.map((ingredient,index)=>{
                                                return(
                                                    <li className="flex my-2" key={index}>
                                                        <p className="font-semibold">{ingredient.name}</p>
                                                        <div className="px-2">
                                                            <span onClick={()=>updateIngs(item,ingredient,"remove",item.quantity,item.price)} className="px-3 pb-1 rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300 " >remove</span> - 
                                                            <span onClick={()=>updateIngs(item,ingredient,"extra",item.quantity,item.price)} className="px-3 pb-1 ml-2  rounded-full bg-gray-400 shadow-md hover:cursor-pointer hover:shadow-inner hover:bg-gray-300" >extra</span>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                            } 
                                        </ul>
                                    </div>
                                    </>: ""
                                }
                                
                            </> : <span className="">quantity: {item.quantity}</span>
                            }
                            {
                                ((item.removeIngs.length > 0 || item.extraIngs.length > 1) )?
                                <CustomIngredient removeIngs={item.removeIngs} extraIngs={item.extraIngs}></CustomIngredient> 
                                : "" 
                            }
                            
                        </div>
                        <span><strong>price: </strong>{item.price}</span>
                    </div>
                )
           })
        }
        
        </div>
        
    )
}

export{Orders};