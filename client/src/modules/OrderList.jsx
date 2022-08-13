import React from "react";
import { Orders } from "./Orders";
import { useSelector, useDispatch } from "react-redux";
import { finalizedOrder } from "../slice/OrderList";

const OrderList = ({ orders })=>{
    const dispatch = useDispatch();
    const finalO = useSelector((state)=>state.HandleOrder.finalOrderList);
    const[cardDisplay, setCardDisplay] = React.useState(false);
    function Close(){
        setCardDisplay(false);
    }
    function Open(){
        setCardDisplay(true);
        dispatch(finalizedOrder());
    }

    return(
        <>
       {
        (cardDisplay)?
        <div>
        <div className="absolute inset-0  bg-gray-400 blur-3xl z-50"></div>
        <div className="absolute inset-x-11 bg-gray-200 p-4 z-50">
        <div onClick={Close} className="float-right bg-gray-400 px-3 text-base rounded-xl shadow-md">close</div>
            {
                (finalO.totalItems !== 0)? 
                <>
                    
                    <span><strong>Total Dish: </strong>{finalO.totalItems}</span>
                    {   
                        
                        finalO.Items.map((item)=>(
                            (item.name !== null)?
                                <div className="my-4">
                                    <span><strong>Dish Name: </strong>{item.name}</span><br />
                                    <span><strong>Custom Ingredients: </strong>{item.customIngredient}</span><br />
                                </div>
                            :""
                        ))
                    }
                    <span className="text-xl"><strong>Total Price: </strong>{finalO.FinalPrice}rs</span>
                    <div className="float-right text-xl font-bold bg-gray-400 px-4 py-3 rounded-xl shadow-md">Place Order</div>
                </> : <p className="text-gray-400">OrderList is empty please order your dish first.</p>
                
            }
            
        </div>
        </div>:""
       }
        

        <div className="absolute w-4/5 bg-gray-300 p-7 z-40">
            <span className="absolute top-1 left-2 font-semibold text-sm text-gray-500">Your order list</span>
            {
                (orders.length > 0)?  <Orders orders={orders}></Orders>: <p className="text-center p-4 text-gray-400">you haven't selected any dish. your can order dish by clicking on dish you like</p>
            }
            <div className="flex justify-between flex-wrap">
                <div className="self-center">
                    <span className="text-sm font-semibold">include 13% VAT, 5% tips</span>
                    <h2 className="text-xl"><strong>Total: {finalO.FinalPrice}</strong></h2>
                </div>
                <div className="self-center">
                    <input onClick={Open} type="submit" value="Order" className="text-xl font-bold bg-gray-400 px-4 py-3 rounded-xl shadow-md"/>
                </div>
            </div>
            
        </div>
        </>
        
    )
}
export{OrderList};