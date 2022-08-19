import { v4 as uuid } from 'uuid';
import React from "react";
import axios from "axios";

 let DishObj = {};
function addCustomIngInput(e){
    const container = document.getElementById("cusIngBox");
    const nameValue = document.getElementById("ingName");
    const priceValue = document.getElementById("ingPrice");
    
    const list = document.createElement("li");
    const ingName = document.createElement("span");
    const ingPrice = document.createElement("span");
    const delBtn = document.createElement("span");
    const brake = document.createElement("br");

    ingName.textContent = nameValue.value;
    ingPrice.textContent = priceValue.value;
    ingName.setAttribute("id","ci_name")
    ingPrice.setAttribute("id","ci_price")
    delBtn.textContent = " delete ";
    delBtn.setAttribute("id","del");

    container.appendChild(list);
    list.appendChild(ingName);
    list.appendChild(ingPrice);
    list.appendChild(delBtn);
    list.appendChild(brake);

    delBtn.addEventListener('click', (e)=>{
        console.log(e.target);
        list.remove(e.target);
    })
}

// const generateId = (length) =>  {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

function addToDishList(){
    const img = document.getElementById('d_img');
    const name = document.getElementById('d_name');
    const price = document.getElementById('d_price');
    const d_point = document.getElementById('d_point');
    const d_bi = document.getElementById('d_bi');
    const d_ci = document.getElementById('cusIngBox').children;
    const d_category = document.querySelector("[name='d_category']");
    const veg = document.getElementById("veg");
    const newD = document.getElementById("newD");
    const signature = document.getElementById("signature");
    const countries = document.querySelectorAll("[name='country']");
    const methods = document.querySelectorAll("[name='method']");
    const metadata = document.getElementById("metadata");

    let selectedContries = [];
    let selectedCookingMethods = [];

    for (let index = 0; index < countries.length; index++) {   
        if(countries[index].checked === true){
            selectedContries = [...selectedContries, countries[index].value];
        }  
    }
    for (let index = 0; index < methods.length; index++) {   
        if(methods[index].checked === true){
            selectedCookingMethods = [...selectedCookingMethods, methods[index].value];
        }
    }

    let metadataArray = [
        name.value, 
        d_category.value,
        ...d_bi.value.split(','), 
        (veg)? 'veg':'nonveg', 
        (newD)? 'new':'', 
        (signature)? 'signature':'', 
        ...selectedContries.concat(...selectedCookingMethods),
        ...metadata.value.split(',')
    ];

    let cIngs = [];

    for (let index = 0; index < d_ci.length; index++) {
        
        let ci_name = d_ci[index].children[0].textContent;
        let ci_price = d_ci[index].children[1].textContent;
        cIngs = [...cIngs, {name: ci_name, price: ci_price}];
        //insert cusing name into metadataArray
        metadataArray = [...metadataArray, ci_name];
    };



    // DishObj = [...DishObj,
    //      {
    //         id: uuid(), img_src: "", name: name.value, price: price.value,
    //         baseIngredient: d_bi.value,
    //         customIngredient: cIngs,
    //         filter:{
    //             star: d_point.value,
    //             //1 = starter 2=main 3=dessert 4=drinks
    //             category: d_category.value,
    //             veg: veg.checked,
    //             new: newD.checked,
    //             signature: signature.checked,
    //             country: selectedContries.toString(),
    //             method: selectedCookingMethods.toString(),
    //             metadata: metadataArray.toString(),
    //         }
    //      }
    // ];

    DishObj =
        {
           id: uuid(), img_src: "", name: name.value, price: price.value,
           baseIngredient: d_bi.value,
           customIngredient: cIngs,
           filter:{
               star: parseInt(d_point.value),
               //1 = starter 2=main 3=dessert 4=drinks
               category: parseInt(d_category.value),
               veg: (veg.checked)? 1:0,
               new: (newD.checked)? 1:0,
               signature: (signature.checked)? 1:0,
               country: selectedContries.toString(),
               method: selectedCookingMethods.toString(),
               metadata: metadataArray.toString(),
           }
        };
   

    // let jsonType = JSON.stringify(DishObj);

console.log(DishObj);
// console.log(jsonType);
}

const InsertDish = ()=>{

    function addDish(dishObj){
        console.log(JSON.stringify(dishObj))
       axios.post("http://localhost:3001/post/insertdish", dishObj)
       .then((res)=>{
        console.log(res);
       })
       .catch((err)=>{
        console.log(err);
       });
    }

    return(
        <>
        <div className="w-5/6 mx-auto p-4 bg-gray-200">
            <h2 className="font-bold text-center">Insert New Dish</h2>
            <span className="text-base">Select Dish Image</span>
            <input className="p-2 rounded-full  m-2" id="d_img" type="file" name="image" accept="image/png, image/jpeg" placeholder="dish image"/><br />
            <span className="text-base">Enter Dish Name</span><br />
            <input className="p-2 rounded-full  m-2" id="d_name" type="text" name="name" placeholder="dish name"/><br />
            <span className="text-base">Enter Dish Price</span><br />
            <input className="p-2 rounded-full  m-2" id="d_price" type="number" placeholder="dish price"/><br /><br />
            <label htmlFor="">base ingredient</label><br />
            <textarea id="d_bi" className="p-2 rounded-md  m-2" name="bi" rows="4" cols="30" placeholder="separate by comma (,) eg: semolina,flour,egg yolk"/><br />

            <div>
                <label htmlFor="">custom ingredient</label><br />
                <input className="p-2 rounded-full  m-2" type="text" placeholder="name" id="ingName"/><br />
                <input className="p-2 rounded-full  m-2" type="number" placeholder="price" id="ingPrice"/>
                <span onClick={(e)=>addCustomIngInput(e)} className="px-2 py-1 bg-gray-400 shadow-md rounded-full">add</span>
                <div id="cusIngBox"></div>
            </div><br />
            <div>
                <label htmlFor="">Enter Dish Point</label><br />
                <input className="p-2 rounded-full  m-2" id="d_point" type="number" placeholder="points between 1-5"/><br /><br />
                <label>select dish category</label> <br />
                <input className="p-2 rounded-full  m-2" type="radio" name="d_category" id="starter" value='1'/>starter
                <input className="p-2 rounded-full  m-2" type="radio" name="d_category" id="main" value='2'/>main
                <input className="p-2 rounded-full  m-2" type="radio" name="d_category" id="dessert" value='3'/>dessert
                <input className="p-2 rounded-full  m-2" type="radio" name="d_category" id="drinks" value='4'/>drinks
                <br />
                
                <input className="p-2 rounded-full  m-2" id="veg" type="checkbox" name="veg"  />veg<br />
                <input className="p-2 rounded-full  m-2" id="newD" type="checkbox" name="new"  />new<br />
                <input className="p-2 rounded-full  m-2" id="signature" type="checkbox" name="signature"/>signature dish<br /><br />
                <label for="country">Select Country</label><br />
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="Itily"/>Itily
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="portugal"/>portugal
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="american"/>american
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="british"/>british
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="german"/>german
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="iran"/>iran
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="nepal"/>nepal
                    <input className="p-2 rounded-full  m-2" type="checkbox" name="country" value="china"/>china
                
                <br /><br /><label for="method">Select Cooking Method</label><br />
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="stew"/>stew
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="soup"/>soup
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="boiled"/>boiled
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="fried"/>fried
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="roasted"/>roasted
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="grill"/>grill
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="bake"/>bake
                    <input className="p-2 rounded-full m-2" type="checkbox" name="method" value="bbq"/>bbq                    
                
                <br /><br /><label htmlFor="">Enter Metadata </label><br/>
                <textarea id="metadata" className="p-2 m-2 rounded-md" type="textarea" name="metadata" rows="4" cols="30" placeholder="seperate by comma (,)"/><br />
                
            </div><br />
            <div className="w-full p-2 bg-black text-white text-center shadow-md rounded-md" onClick={addToDishList}>Add To Dish List</div>
            <div onClick={()=>addDish(DishObj)}>send</div>
        </div>
        </>
        
    )
}

export {InsertDish};