import React from "react";  

const CustomIngredient = ({removeIngs,extraIngs})=>{
    // console.log("This is removeings");
    // console.log( removeIngs );
    // console.log("This is extraings");
    // console.log( extraIngs );
    return(
        <div className="m-4 px-2 border-4 border-dashed">
            <div className="p-1">
                <strong>remove</strong>
                <li className="flex">
                    {
                        removeIngs.map((item)=>(
                            <p className="line-through mx-1">{item},</p>
                        ))
                    }
                    
                </li>
                <li className="flex mx-1">
                    
                </li>
                
            </div>
            <div className="p-1">
                <strong>Extra</strong>
                {
                (extraIngs.length > 1) &&
                extraIngs.map((obj,index)=>(
                    <li className="flex relative mx-1 my-4" key={index}> 
                        <div className="flex">
                            <p className="z-20 mx-1">{obj.name}</p>
                            <span>+ <span className="text-gray-400">Rs: {obj.price}</span></span>
                            <span className="absolute -left-2 -top-3 px-1 rounded-full bg-gray-300 z-10">x{obj.c}</span>
                        </div>
                    </li>
                ))
                }
            </div>
        </div>
    )
}

export{CustomIngredient};