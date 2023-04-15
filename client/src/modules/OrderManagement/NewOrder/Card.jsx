
const Card = ()=>{
   return(
      <div className="w-64 bg-gray-300 p-2  border-2 border-dashed border-white">
         <div className="flex justify-between items-baseline">
            <span className='text-base font-bold'>Table: <span className="text-lg">1</span></span>
            <strong>1dk1kdk</strong>
         </div>
         <div className="relative">
            <div className="flex justify-center text-xl">
               <strong>4</strong>
               <span>-</span>
               <strong>0</strong>
            </div>
         
            <div className="absolute right-0 top-0">
               <span className="text-sm">25<span>min</span></span>
            </div>
         </div>
         <div className="border-b-2 font-semibold">
            <span>1<span>S</span></span>
            <span className="ml-1">1<span>M</span></span>
            <span className="ml-1">1<span>D</span></span>
            <span className="ml-1">1<span>D</span></span>
         </div>
         <div className="h-16 flex flex-wrap overflow-y-scroll">
            <div className="flex mr-2">
               <span>2</span>
               <span>chicken roast</span>
               <span>.C,</span>
            </div>
            <div className="flex mr-2">
               <span>2</span>
               <span>name</span>
               <span>C</span>
            </div>
            <div className="flex mr-2">
               <span>2</span>
               <span>name</span>
               <span>C</span>
            </div>
            <div className="flex mr-2">
               <span>2</span>
               <span>name</span>
               <span>C</span>
            </div>
            <div className="flex mr-2">
               <span>2</span>
               <span>name</span>
               <span>C</span>
            </div>
            <div className="flex mr-2">
               <span>2</span>
               <span>name</span>
               <span>C</span>
            </div>
            <div className="flex mr-2">
               <span>2</span>
               <span>name</span>
               <span>C</span>
            </div>
            <div className="flex mr-2">
               <span>2</span>
               <span>name</span>
               <span>C</span>
            </div>
            
         </div>

      </div>
   )
};

export{Card}