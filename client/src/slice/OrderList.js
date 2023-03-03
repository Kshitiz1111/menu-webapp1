import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = {
    availableTables:[1,2,3,4,5,6,7,8,9,10],
    orders: [],
    orderActiveToEdit: {
        id: null,
        status: "edit",
    },
    finalOrderList: {
        tableNumber:null,
        clientId:'',
        orderId: '',
        totalItems: 0,
        Items: [],
        FinalPrice: 0,
        timestamp:'',

    }
}

export const  OrderList= createSlice({
    name:"addToOrder",
    initialState,
    reducers:{
        addToOrderList: (state,action)=>{
            const {dish,totalPrice,quantity,extraIngs,removeIngs} = action.payload;
            
            if(state.orders.find(item =>{
                    if(item.id === dish.id) return true;
                    return false;
                }))
            {
                console.log("already added to order list");
                state.orders = [...state.orders];
                
            }else{
                 state.orders = 
                [
                ...state.orders,
                    {
                    id: dish.id,
                    name: dish.name,
                    quantity: quantity,
                    initialPrice: dish.price,
                    price: totalPrice,
                    removeIngs: removeIngs,
                    extraIngs: extraIngs,
                    customIngredient: dish.cusIngredient,
                    cook_time: dish.filters.cook_time,
                    category: dish.filters.category,
                    }
                ]
            }
           
            console.log("hey")
            console.log(state.orders);
            //recalculate final price
            state.finalOrderList.FinalPrice = 0;
            if(state.orders.length > 0){
                for (let index = 0; index < state.orders.length; index++) {
                    state.finalOrderList.FinalPrice += state.orders[index].price;
                }
            }
        },

        deleteOrder: (state, action)=>{

           state.orders = state.orders.filter((item)=>(
                item.id !== action.payload
            ))
            //recalculate final price
            state.finalOrderList.FinalPrice = 0;
            if(state.orders.length > 0){
                for (let index = 0; index < state.orders.length; index++) {
                    state.finalOrderList.FinalPrice += state.orders[index].price;
                }
            }
        },

        editOrder: (state, action)=>{
            const {itemId, activeStatus} = action.payload;

            if(activeStatus === "edit"){
                state.orderActiveToEdit.id = itemId;
                state.orderActiveToEdit.status = "done";
             
              }else if(activeStatus === "done"){
                state.orderActiveToEdit.id = null;
                state.orderActiveToEdit.status = "edit";
              }
            //recalculate final price
              state.finalOrderList.FinalPrice = 0;
              if(state.orders.length > 0){
                  for (let index = 0; index < state.orders.length; index++) {
                      state.finalOrderList.FinalPrice += state.orders[index].price;
                  }
              }
        },
        replaceIngs(state, action){
            const {order, btn, removeIng, extraIng, quantity} = action.payload;
            
            //set current index
            let orderIndex ;
            //replace
            if(btn === "remove"){
                
                // eslint-disable-next-line
                state.orders.map((item,index)=>{
                    if(item.id === order.id){
                        orderIndex = index;
                    }
                })
                console.log(state.orders[0].extraIngs);
            }
            if(btn === "extra"){
                // eslint-disable-next-line
                state.orders.map((item,index)=>{
                    
                    if(item.id === order.id){
                        orderIndex = index;
                    }
                })
                        
                   console.log(state.orders[0].extraIngs);
            }

            if(btn === "reset"){
                // eslint-disable-next-line
                state.orders.map((item,index)=>{
                    if(item.id === order.id){
                        orderIndex = index;
                    }
                })
                        
                   
            }

            if(btn === "quantity"){
                // eslint-disable-next-line
                state.orders.map((item,index)=>{
                    if(item.id === order.id){
                        orderIndex = index;
                    }
                })
            }
            //revisit
            //reassign
            state.orders[orderIndex].quantity = quantity;
            state.orders[orderIndex].removeIngs = removeIng;
            state.orders[orderIndex].extraIngs = extraIng;

            let sumExtra = 0;

            //revisit
            for (let index = 1; index < state.orders[orderIndex].extraIngs.length; index++) {
                sumExtra += state.orders[orderIndex].extraIngs[index].price;
            };
            //recalculate price
            state.orders[orderIndex].price = (parseInt(state.orders[orderIndex].initialPrice) * parseInt(quantity) ) + sumExtra;
            console.log("new price");
            console.log(state.orders[orderIndex].price);
            //recalculate final price
            state.finalOrderList.FinalPrice = 0;
            if(state.orders.length > 0){
                for (let index = 0; index < state.orders.length; index++) {
                    state.finalOrderList.FinalPrice += state.orders[index].price;
                }
            }
        },

        finalizedOrder(state,action){
            state.finalOrderList.totalItems = 0;
            // eslint-disable-next-line
            state.finalOrderList.Items = [];
            state.finalOrderList.FinalPrice = 0;
            state.finalOrderList.clientId = null;
            state.finalOrderList.orderId = null;
            state.finalOrderList.timestamp = null;

            if(state.orders.length > 0){
                for (let index = 0; index < state.orders.length; index++) {
                    state.finalOrderList.totalItems += 1;
                    let arr1 = [];
                    let arr2 = [];
                    arr1 = state.orders[index].extraIngs.map((item)=>(
                    [...arr1,`${item.c}x extra: ${item.name}, `]
                    ))
                    console.log(arr1);
                    arr2 = state.orders[index].removeIngs.map((item)=>(
                        [...arr2,` Remove: ${item}`]
                    ))
                    const Arr = arr1.concat(arr2);
                    state.finalOrderList.Items = [
                        ...state.finalOrderList.Items,
                        {
                            itemId: state.orders[index].id.slice(0,8),
                            name: state.orders[index].name, 
                            quantity: state.orders[index].quantity,
                            customIngredient: Arr,
                            removeIngs: state.orders[index].removeIngs,
                            extraIngs: state.orders[index].extraIngs,
                            type: state.orders[index].category,
                            cooktime: state.orders[index].cook_time,
                            itemPrice: state.orders[index].price,

                        }
                    ];
                    let date = `${new Date().getFullYear()}, ${new Date().getDate()}, ${new Date().getDay()}, ${new Date().getHours().toString()}, ${new Date().getMinutes()}, ${new Date().getSeconds()}, ${new Date().getMilliseconds()}`;
                    state.finalOrderList.timestamp = date;
                    state.finalOrderList.FinalPrice += state.orders[index].price;
                    state.finalOrderList.clientId = action.payload;
                    state.finalOrderList.orderId = uuid().slice(0,8);
                }
            }
            
            console.log("this is final order");
            console.log(JSON.stringify(state.finalOrderList));
        },
        addTableNumber:(state,action)=>{
            state.finalOrderList.tableNumber = null;
            state.finalOrderList.tableNumber = action.payload;
            console.log(state.finalOrderList.tableNumber);
        },

        
    }
})

export const {addToOrderList, deleteOrder, editOrder,replaceIngs,finalizedOrder,addTableNumber} = OrderList.actions;
export default OrderList.reducer;