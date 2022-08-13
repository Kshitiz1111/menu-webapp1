import React from 'react';
import { useDispatch } from 'react-redux';
import {openDish} from '../slice/OpenSingleDish';
import dishImg from "../assets/dish.PNG"

const CustomerChoice = ({dishes,maxSize,styleWrap,styleEven,sytleOverFlowHidden})=>{
    const dispatch = useDispatch();
    return(
        <div className='flex justify-between p-3 overflow-x-scroll' style={{flexWrap: styleWrap,justifyContent: styleEven, overflow: sytleOverFlowHidden}}>
            {
            dishes.slice(0,maxSize).map((item) => (
                <div className='flex border rounded-md m-1 px-1 min-w-fit' key={item.id} onClick={()=>dispatch(openDish(item))}>
                    <img src={dishImg} className='w-14 rounded-full m-1' alt="" />
                    <span className='self-center'>
                        <strong>{item.name}</strong>
                        <p className='text-xs'>Rs: <span>{item.price}</span></p>
                    </span>
                </div>
            ))
            
            }
        </div>
    
    );
}

export{CustomerChoice}