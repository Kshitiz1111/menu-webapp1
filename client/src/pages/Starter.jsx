import React, { useEffect, useMemo } from "react";
import {InnerNav} from "../modules/InnerNav";
import { DishDisplay } from '../modules/DishDetail/DishDisplayCard';
import { OrderList } from '../modules/OrderList';
import {Ingredient} from '../modules/DishDetail/Ingredient'
import { AddToOrder } from '../modules/DishDetail/AddToOrder';
import filtericon from "../assets/filtericon.PNG";
import { Dish } from "../modules/Dish";
import { CustomerChoice } from "../modules/CustomerChoice";
import { useSelector, useDispatch } from 'react-redux';
import { setTagActive,reset } from "../slice/Filter";



const Starter = ()=>{

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
    
    //for filter

    const dispatch = useDispatch();
    const tagContainer = React.useRef(null);
    const filterTabArr = useSelector((state)=>state.Filter.activeTabs);

    function sendId(e){
        const ele = tagContainer.current;

        if(e.currentTarget.getAttribute("active") === '0'){
            ele.prepend(e.currentTarget);
        }
        dispatch(setTagActive(e.currentTarget.id));
    }

    function setDefaultTab(){
        const tabs = document.getElementById('TagsContainer').children;
        dispatch(reset());
        for (let index = 0; index < tabs.length; index++) {
            if(tabs[index].getAttribute("active") === '1'){
                tabs[index].setAttribute("active","0");
                dispatch(setTagActive(tabs[index].getAttribute("id")));
            }  
        }
       
    }

    useEffect(()=>{
        setDefaultTab();
    },[]);

  
    console.log(filterTabArr.name.slice());
    console.log(filterTabArr.id.slice());

    return(
        <>
        {
            (active === true)? 
            <OrderList 
              selectedDish = {selectedItem} 
              orders={orders} 
            >
            </OrderList> : ''
        }
        <InnerNav orderListToggleHandler={orderListToggleHandler}></InnerNav>
        
            <div className="flex justify-between px-4 my-1">
                <div id="TagsContainer" ref={tagContainer} className="flex overflow-x-scroll overflow-y-hidden py-2">
                    <span onClick={(e)=>sendId(e)} id="1" active='1' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer ">all</span>
                    <span onClick={(e)=>sendId(e)} id="2" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">originals</span>
                    <span onClick={(e)=>sendId(e)} id="3" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">new</span>
                    <span onClick={(e)=>sendId(e)} id="4" active='1' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">customer choice</span>
                    <span onClick={(e)=>sendId(e)} id="5" active='1' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">your choice</span>
                    <span onClick={(e)=>sendId(e)} id="6" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">veg</span>
                    <span onClick={(e)=>sendId(e)} id="7" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">non veg</span>
                    <span onClick={(e)=>sendId(e)} id="8" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">cheapest</span>
                    <span onClick={(e)=>sendId(e)} id="9" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">stew</span>
                    <span onClick={(e)=>sendId(e)} id="10" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">soup</span>
                    <span onClick={(e)=>sendId(e)} id="11" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">boiled</span>
                    <span onClick={(e)=>sendId(e)} id="12" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">fried</span>
                    <span onClick={(e)=>sendId(e)} id="13" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">roasted</span>
                    <span onClick={(e)=>sendId(e)} id="14" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">grill</span>
                    <span onClick={(e)=>sendId(e)} id="15" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">bake</span>
                    <span onClick={(e)=>sendId(e)} id="16" active='0' className="text-sm px-2 min-w-fit min-h-fit py-1 m-1 bg-gray-100 rounded-full shadow-md hover:shadow-inner hover:cursor-pointer">bbq</span>
                </div>
                <div>
                    <img className="w-10 py-2 m-1" src={filtericon} alt="" />
                </div>
            </div>
            

            {
                filterTabArr.name.map((item)=>{

                    return(
                        <div className="p-4">
                            <h2>{item}</h2>
                        </div>
                    )
                    
                })
            }
            {/* <div>
              <h3 className='font-bold pl-4 my-1'>Your Previous Choice</h3> 
              {
                  (userVisited.visited)? <Dish dishes={Dishes} maxSize={userVisited.recentOrderNo}></Dish> : ""
              }
            </div>
            
            <div >
              <h3 className='font-bold pl-4 my-1'>Customer Choice</h3> 
              <div className="bg-gray-200">
                <CustomerChoice dishes={Dishes} maxSize={userVisited.recentOrderNo} styleWrap={"wrap"} styleEven={"space-around"} sytleOverFlowHidden={"hidden"}></CustomerChoice>
              </div>
            </div> */}
            
            {/*floating element*/}
            {
                (useSelector((state)=>state.DishCard.openDishCard))? 
                <DishDisplay 
                  selectedDish = {selectedItem} 
                ></DishDisplay>:""
            }
            {
                (useSelector((state)=>state.DishCard.openIngsCard))?<Ingredient selectedDish = {selectedItem}></Ingredient>:""
            }
            {
                (useSelector((state)=>state.DishCard.openOrderCard))?<AddToOrder selectedDish = {selectedItem} ></AddToOrder> : ""
            }
        </>
       
    
        
    )
}

export{Starter}