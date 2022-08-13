import {Nav} from '../modules/Nav';
import {CustomerChoice} from '../modules/CustomerChoice';
import {Menu} from '../modules/Menu';
import {Dish} from '../modules/Dish';
import { DishDisplay } from '../modules/DishDetail/DishDisplayCard';
import {Ingredient} from '../modules/DishDetail/Ingredient'
import { AddToOrder } from '../modules/DishDetail/AddToOrder';
import { OrderList } from '../modules/OrderList';
import React from 'react';
import { useSelector } from 'react-redux';



 

const Home = ()=>{
    //orderlist
    const [active, setActive] = React.useState(false)
    const orderListToggleHandler = ()=>{
       (active === false)? setActive(true): setActive(false);
    }
    
    //////
    const Dishes = useSelector((state)=>state.getDishes.dishes);
    const userVisited = useSelector((state)=>state.getDishes.userVisited);

    const orders = useSelector((state)=>state.HandleOrder.orders);

    const selectedItem = useSelector((state)=>state.DishCard.selectedItem);
      return (
        <>
          {
            (active === true)? 
            <OrderList 
              selectedDish = {selectedItem} 
              orders={orders} 
            >
            </OrderList> : ''
          }
          <Nav orderListToggleHandler={orderListToggleHandler}></Nav>
          <CustomerChoice dishes={Dishes} maxSize='10'></CustomerChoice>
            <Menu></Menu>
      
       
    
          <div>
            <h3 className='font-bold pl-4 my-4'>Your Previous Choice</h3> 
            {
              (userVisited.visited)? <Dish dishes={Dishes} maxSize={userVisited.recentOrderNo}></Dish> : ""
            }
          </div>

          {
            (useSelector((state)=>state.DishCard.openDishCard))? 
            <DishDisplay 
              selectedDish = {selectedItem} 
            ></DishDisplay>:""
          }
          {
            (useSelector((state)=>state.DishCard.openIngsCard))?<Ingredient selectedDish = {selectedItem} ></Ingredient>:""
          }
          {
            (useSelector((state)=>state.DishCard.openOrderCard))?<AddToOrder selectedDish = {selectedItem} ></AddToOrder> : ""
          }
        </>
      );
}

export{Home};