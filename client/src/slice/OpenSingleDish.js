import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openDishCard: false,
    openIngsCard: false,
    openOrderCard: false,
    selectedItem: [],
}

export const OpenSingleDish  = createSlice({
    name: "SingleDishCard",
    initialState,
    reducers: {
        openDish: (state,action)=>{
            state.openDishCard = true;
            state.openIngsCard = false;
            state.openOrderCard = false;
            state.selectedItem = action.payload;
            
        },
        openIng: (state,action)=>{
            state.openDishCard = true;
            state.openIngsCard = true;
            state.openOrderCard = false;
        },
        closeIng: (state,action)=>{
            state.openDishCard = true;
            state.openIngsCard = false;
            state.openOrderCard = false;
        },
        openOrder: (state,action)=>{
            state.openDishCard = true;
            state.openIngsCard = true;
            state.openOrderCard = true;
        },
        closeOrder: (state,action)=>{
            state.openDishCard = true;
            state.openIngsCard = true;
            state.openOrderCard = false;
        },
        closeAllDishCard: (state)=>{
            state.openDishCard = false;
            state.openIngsCard = false;
            state.openOrderCard = false;
            state.selectedItem = [];
        }
    }
})

export const {openDish,openIng,openOrder,closeIng,closeOrder,closeAllDishCard} = OpenSingleDish.actions;
export default OpenSingleDish.reducer;