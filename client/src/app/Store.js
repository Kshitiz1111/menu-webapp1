import { configureStore } from '@reduxjs/toolkit';
import  OpenSingleDish  from '../slice/OpenSingleDish';
import  initDishes  from '../slice/Dishes';
import CustomizeIng from '../slice/CustomizeIng';
import OrderList from '../slice/OrderList';
import Filter from '../slice/Filter';
import UniqueDeviceId from '../slice/UniqueDeviceId';
//cook
import AllOrders from '../slice/cook/AllOrders';

export const store = configureStore({
    reducer: {
        DishCard: OpenSingleDish,
        getDishes: initDishes,
        CustomizedIngredients: CustomizeIng,
        HandleOrder: OrderList, 
        Filter: Filter,
        UDID: UniqueDeviceId,
        //cook
        AllOrders: AllOrders
    },
})