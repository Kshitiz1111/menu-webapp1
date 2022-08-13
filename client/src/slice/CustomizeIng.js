import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    removeIngs: [],
    extraIngs: [{}],
}
function ifExisted(arrList,singleIng,btn){
    let result;
   
    for (let index = 0; index < arrList.length; index++) {
      if(btn === "extra"){
        result = (arrList[index].name === singleIng.name)?  true: false;
      }else if(btn === "remove"){
        result = (arrList[index].name === singleIng.name)?  true: false;
      }
      if(result === true && btn === "extra"){
        // console.log(result + " from ifExisted inside map");
   
        arrList[index].c += 1;
        //revisit
        arrList[index].price += arrList[index].initPrice;
        
        console.log( "count : " + arrList[index].c);
        return result;
      }else if(result === true && btn === "remove"){
        arrList[index].c = 0;
        console.log("count : " + arrList[index].c);
        return result;
      }
   
    }
    return result;
}
export const CustomizedIngs = createSlice({
    name:"customize ingredient",
    initialState,
    reducers: {
        setIngsToEdit: (state, action)=>{
          const {extraIng , removeIng} = action.payload;
          state.extraIngs = extraIng;
          state.removeIngs = removeIng;
        },

        addExtraIng: (state, action)=>{
            const cusIngs = action.payload;
            console.log( cusIngs);
            state.removeIngs = state.removeIngs.filter((item)=>( cusIngs.name !== item ));                
            let count = 1;
        
            if(ifExisted(state.extraIngs,cusIngs,"extra")){
            console.log("already in added to extra");
            }else if(ifExisted(state.extraIngs,cusIngs,"extra") === false){
            //revisit for initprice
            
             state.extraIngs = [...state.extraIngs,{name:cusIngs.name, initPrice:cusIngs.price, price:cusIngs.price, c:count}];

            }
        },

        addRemoveIng: (state, action)=>{
            const cusIngs = action.payload;
            console.log( cusIngs);
            if( state.removeIngs.includes(cusIngs.name) ){
                console.log('already included');
            }else{
              //pop selected item from extra arr if selected item exists 
              if(ifExisted(state.extraIngs,cusIngs,'remove')){
                
                state.extraIngs = state.extraIngs.filter((item)=>(item.name !== cusIngs.name ));
              //and put that selected item into remove ings arr
                state.removeIngs = [...state.removeIngs,cusIngs.name];

              console.log(state.extraIngs + 'modified ex');
              }else{
                //if selected item doesnot exist in extra arr add it to remove arr
                state.removeIngs = [...state.removeIngs,cusIngs.name];
              }
                    
            }
        },

        reset: (state)=>{
            state.extraIngs = [{}];
            state.removeIngs = [];
        }
        

    }
})


export const {setIngsToEdit, addExtraIng, addRemoveIng, reset} = CustomizedIngs.actions;
export default CustomizedIngs.reducer;