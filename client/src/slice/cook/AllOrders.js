import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   orders:[
      {
         client_id: "2501006464537361140005373611401823675960153624",
         item: [
           {
             cook_time: 5,
             extra_ings: "undefinedx undefined,1x aa",
             item_id: "3a7eda8c",
             item_name: "test",
             order_item_id: "207d21093a7eda8c",
             ordered_id: "207d2109",
             price: 121,
             quantity: 1,
             remove_ings: "ae",
             type: "1"
           }
         ],
         order_id: "207d2109",
         table_no: 3,
         timestamp: "2023, 7, 4, 22, 3, 50, 679",
         total_item: 1,
         total_price: 121
       }
   ]
}

export const AllOrders = createSlice({
   name: "allOrders",
   initialState,
   reducers:{}

})

export const {} = AllOrders.actions;
export default AllOrders.reducer;