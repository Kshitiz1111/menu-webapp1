import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTabs: {
        name: [],
        id:[],
    },
}
export const Filter = createSlice({
    name: "filterDish",
    initialState,
    reducers:{
        setTagActive(state,action){
            console.log("i am called");
            const childId= action.payload;
            const childEle = document.getElementById(childId);
            const activeStatus = childEle.getAttribute("active");
            
            if(activeStatus === "1"){
                console.log("a");
                childEle.style.backgroundColor = "#F3F4F6";
                childEle.style.color = "black";
                childEle.setAttribute("active", "0");
                state.activeTabs.id = state.activeTabs.id.filter((itemId)=>(
                    (itemId !== childId)
                ))
                state.activeTabs.name = state.activeTabs.name.filter((item)=>(
                    (item !== childEle.textContent)
                ))
            }
            if(activeStatus === "0"){
                console.log("b");
                childEle.style.backgroundColor = "black";
                childEle.style.color = "white";
                childEle.setAttribute("active","1");
                // parentEle.prepend(childEle);

                // state.activeTabs.id.map((itemId)=>{
                //     if(itemId !== childId){
                        state.activeTabs.name = [...state.activeTabs.name , childEle.textContent];
                        state.activeTabs.id = [...state.activeTabs.id , childId];
                //     }
                // })


            }

        },
        reset(state){
            state.activeTabs.id = [];
            state.activeTabs.name = [];
        },
    }
})

export const {setTagActive, reset } = Filter.actions;
export default Filter.reducer;

