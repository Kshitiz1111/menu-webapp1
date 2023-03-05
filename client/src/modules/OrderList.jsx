import React from "react";
import { Orders } from "./Orders";
import { useSelector, useDispatch } from "react-redux";
import { finalizedOrder,addTableNumber } from "../slice/OrderList";
import { useEffect } from "react";
import axios from "axios";


const OrderList = ({ orders })=>{
    const dispatch = useDispatch();
    const finalO = useSelector((state)=>state.HandleOrder.finalOrderList);
    const UDID = useSelector((state)=>state.UDID.id);
    const availableTables = useSelector((state)=>state.HandleOrder.availableTables);
    console.log(typeof(toString(availableTables.length)),availableTables.length);
    const[cardDisplay, setCardDisplay] = React.useState(false);
    const[tableNumber, SetTableNumber] = React.useState();
    function Close(){
        setCardDisplay(false);
    }

    function assignEditTableNumber(){
        dispatch(addTableNumber(tableNumber));
    }
    useEffect(assignEditTableNumber,[tableNumber])

    function Open(){
        setCardDisplay(true);
        dispatch(finalizedOrder(UDID));
    }

    const [tableErr, setTableErr] = React.useState('');
    function postOrderToDatabase(target){
        if(!finalO.tableNumber){
            target.style.cursor = "not-allowed";
            setTableErr('enter table number');
        }else{
            console.log(JSON.stringify(finalO));
            target.style.cursor = "pointer";
            setTableErr('');
            //
            axios.post("http://localhost:3001/post/order",finalO)
            .then((res)=>{
            console.log(res);
            })
            .catch((err)=>{
            console.log(err);
            });  
            // console.log(JSON.stringify(finalO));
        }
        
    }

    return(
        <>
       {
        (cardDisplay)?
        <div>
        <div className="absolute inset-0  bg-gray-400 blur-3xl z-50"></div>
        <div className="absolute inset-x-11 bg-gray-200 p-4 z-50">
        <div className="flex justify-between items-center">
            <span className="bg-grey-200 text-black px-3 py-1 text-base rounded-xl shadow-inner">OID-{finalO.orderId}</span>
            <span onClick={Close} className="bg-gray-400 px-3 text-base rounded-xl shadow-md">close</span>
        </div>
            {
                (finalO.totalItems !== 0)? 
                <>
                    <div className="mt-5 mb-2 relative">
                    {  
                        <span>
                            <label htmlFor="tableNumber">TableNumber: </label>
                            <input id="tableNumber" type="number" className="rounded-xl w-10" onInput={(e)=>SetTableNumber(e.target.value)} max={toString(availableTables.length)} min='1' value={finalO?.tableNumber} />
                            <span id="tableErr" className="text-base text-red-500 px-1">{tableErr}</span>
                        </span> 
                    }
                    </div>
                
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
                    <button onClick={(e)=>postOrderToDatabase(e.target)} id="placeOrder" className="float-right text-xl font-bold bg-gray-400 px-4 py-3 rounded-xl shadow-md">Place Order</button>
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