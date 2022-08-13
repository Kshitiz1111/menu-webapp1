import React from "react";

const FilterSidebar = ()=>{

    return(
        <div className="bg-gray-200 p-2 shadow-xl">
           
           <div className="flex flex-wrap justify-between w-full">
            <span className="p-2 text-center bg-black text-white rounded-full shadow-md hover:shadow-inner ">close</span>
            <div className="flex">
                <input type="search" placeholder="eg: soup,pasta" className="p-2 rounded-full w-full"/>
                <span className="p-2 text-center bg-gray-400 rounded-full shadow-md hover:shadow-inner ">search</span>
            </div>  
           </div>
           <div className="my-2">
            <p className="p-1">enter price range</p>
            <div className="flex flex-wrap">
                <input type="number" placeholder="from" className="p-2 rounded-full m-1 w-full sm:w-40"/>
                <span className="text-gray-400 text-center w-full sm:w-fit">----</span>
                <input type="number" placeholder="to" className="p-2 rounded-full m-1 w-full sm:w-40"/>
            </div>
           </div>
           <div className="my-4">
            <p className="p-1">famous searches</p>
            <div className="flex flex-wrap">
                <span className="py-1 px-2 my-1 mx-1 rounded-full shadow-md bg-gray-300">popular</span>
                <span className="py-1 px-2 my-1 mx-1 rounded-full shadow-md bg-gray-300">originals</span>
                <span className="py-1 px-2 my-1 mx-1 rounded-full shadow-md bg-gray-300">new</span>
                <span className="py-1 px-2 my-1 mx-1 rounded-full shadow-md bg-gray-300">previous order</span>
                <span className="py-1 px-2 my-1 mx-1 rounded-full shadow-md bg-gray-300">veg</span>
                <span className="py-1 px-2 my-1 mx-1 rounded-full shadow-md bg-gray-300">non veg</span>
            </div>
           </div>
           <div className="flex flex-wrap">
            <div className="m-2">
                <label for="method">choose cooking method</label><br />
                <input className="p-2 rounded-full w-full" type="text" list="methods" id="method" />
                <datalist id="methods">  
                    <option value="stew">stew</option>
                    <option value="soup">soup</option>
                    <option value="boiled">boiled</option>
                    <option value="fried">fried</option>
                    <option value="roasted">roasted</option>
                    <option value="grill">grill</option>
                    <option value="bake">bake</option>
                    <option value="bbq">bbq</option>                    
                </datalist>
            </div>
            <div className="m-2">
                <label for="country">choose country</label><br />
                <input className="p-2 rounded-full w-full" type="text" list="countrys" id="country" />
                <datalist id="countrys">
                    <option value="Itily">Itily</option>
                    <option value="portugal">portugal</option>
                    <option value="american">american</option>
                    <option value="british">british</option>
                    <option value="german">german</option>
                    <option value="iran">iran</option>
                    <option value="nepal">nepal</option>
                    <option value="china">china</option>

                </datalist>
            </div>
           </div>

           <div className="font-bold text-xl text-center p-3 mt-4 rounded-xl bg-black text-white shadow-md">Apply Filter</div>

        </div>
    )
}

export{FilterSidebar};