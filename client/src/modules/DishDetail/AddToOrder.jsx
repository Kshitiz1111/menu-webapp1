import React, { useEffect } from "react";
import {CustomIngredient} from "./CustomIngredient";
import { useSelector,useDispatch } from "react-redux";
import { openIng,closeAllDishCard } from "../../slice/OpenSingleDish";
import { reset } from "../../slice/CustomizeIng";
import { addToOrderList } from "../../slice/OrderList";


const AddToOrder = ({selectedDish} )=>{
    ////
    const dispatch = useDispatch();
    const removeIngs = useSelector((state)=>state.CustomizedIngredients.removeIngs);
    const extraIngs = useSelector((state)=>state.CustomizedIngredients.extraIngs);
    const UDID = useSelector((state)=>state.UDID.id);
    ////
    const [value, setValue] = React.useState(1);
    const [extraItemPrice, setExtraItemPrice] = React.useState();
    const [finalPrice, setFinalPrice] = React.useState(selectedDish.price);
    ////
    

    let sumExtra = 0;

    //revisit
    for (let index = 1; index < extraIngs.length; index++) {
       sumExtra += extraIngs[index].price;
    };

    useEffect(()=>(setExtraItemPrice(sumExtra)),[sumExtra]);
    useEffect(()=>{
        let price = (parseInt(selectedDish.price) * parseInt(value) ) + extraItemPrice;
        
        return(
            setFinalPrice(price)
            )}
    
    ,[value,extraItemPrice]);
    
    const close = ()=> {
        const item = {
            dish: selectedDish,
            totalPrice: finalPrice,
            quantity: value,
            removeIngs: removeIngs,
            extraIngs: extraIngs,
           
        };
        dispatch(addToOrderList(item));
        dispatch(closeAllDishCard());
        dispatch(reset());
    }
       

    return(
    <>
     <div className="absolute inset-0  bg-gray-400 blur-3xl"></div>
       <div className="absolute inset-x-0 top-28 rounded-xl p-5 m-6 bg-gray-100 shadow-md z-30">
       
            <div className="flex justify-between">
                <span onClick={()=>dispatch(openIng())} className="p-2 rounded-full bg-gray-400 shadow-md">customize ingredient</span>
                <div className="relative">
                    <span className="float-right clear-left"><strong>Total: </strong>{finalPrice}rs</span><br />
                    {
                    //revisit
                        (extraIngs.length > 1)? <span className="float-right text-xs">including extra ingredient</span> : ''
                    }
                    
                </div>
            </div>
                <h2 className="text-xl py-1 font-semibold">{selectedDish.name}</h2>
            <div className="p-2">
                <p>customized Ingredients</p>
                {
                    (removeIngs.length > 0 || extraIngs.length > 1)?
                        <CustomIngredient removeIngs={removeIngs} extraIngs={extraIngs}></CustomIngredient>:
                        <p className="p-2 text-sm text-gray-400">Default Ingredient</p>
                }
                
            </div>
            <div>
                
                <div className="flex flex-wrap justify-evenly">
                    <div>
                        <label htmlFor="quantity" className="font-semibold">Enter Quantity</label><br></br>
                        <input type="number" className="p-2 rounded-md border border-black" onChange={(e) => { var value = parseInt(e.target.value); if (value < 1) value = 1; setValue(value); }} value={value}/>
                    </div>
                   
                    <div>
                        <span className="text-xs">add to</span>
                        <div onClick={close} className="w-32 font-bold text-xl text-center p-3 rounded-xl bg-gray-400 shadow-md">Order List</div>
                    </div>
                </div>
            </div>
            <p>check your orders in order list and make your final order</p>
       </div>
    </>
    )
}

export {AddToOrder};