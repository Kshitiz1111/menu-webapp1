import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// { id: 1, img_src: "", name: "Pasta1", price: "200",
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//             filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: true,
//                 signature: false,
//                 metadata: ["pasta1","itialian","pasta",]
//             },
//         },
//         { id: 2, img_src: "", name: "Pasta2", price: "250" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 3, img_src: "", name: "Pasta3", price: "300" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 4, img_src: "", name: "Pasta4", price: "350" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 5, img_src: "", name: "Pasta5", price: "200" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 6, img_src: "", name: "Pasta6", price: "200" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 7, img_src: "", name: "Pasta3", price: "300" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 8, img_src: "", name: "Pasta4", price: "350" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 9, img_src: "", name: "Pasta5", price: "200" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//              filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: "italian",
//                 method: ["boiled","fried"],
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },
//         { id: 10, img_src: "", name: "Paneer Grill", price: "200" ,
//             baseIngredient: ["semolina flour","egg yolk"],
//             customIngredient: [
//                 {
//                     name: "garlic",
//                     price: 20
//                 },
//                 {
//                     name: "ground meat",
//                     price: 20
//                 },
//                 {
//                     name: "cheese",
//                     price: 20
//                 }
//             ],
//             filter:{
//                 star: 2,
//                 //1 = starter 2=main 3=dessert 4=drinks
//                 category: 1,
//                 veg: false,
//                 new: false,
//                 signature: false,
//                 country: ["italian"],
//                 method: ["boiled","fried"],
//                 //include all above filtertype into metadata beside star and category
//                 metadata: ["pasta1","itialian","pasta","tomato"]
//             },
//         },

const initialState ={
    dishes : []
    ,
    userVisited : {
        visited: true,
        dishId:[],
        recentOrderNo: 6,
    }
}

export const initDishes = createSlice({
    name: "DishesDB",
    initialState,
    reducers: {
        setDishes: (state, action)=>{
            state.dishes = action.payload;
            // console.log(state.dishes);
        }
    },
})

export const {setDishes} = initDishes.actions;
export default initDishes.reducer;