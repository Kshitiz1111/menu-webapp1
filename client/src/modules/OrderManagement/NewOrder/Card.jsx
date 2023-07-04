import {useSelector} from "react-redux"
const Card = ()=>{
   const orders = useSelector((state)=> state.AllOrders.orders)

   return(
      <>
         {  
            (orders)?
            orders.map((order)=>(
               <div className="w-64 bg-gray-300 p-2  border-2 border-dashed border-white">
                  <div className="flex justify-between items-baseline">
                     <span className='text-base font-bold'>Table: <span className="text-lg">{order.table_no}</span></span>
                     <strong>{order.order_id}</strong>
                  </div>
                  <div className="relative">
                     <div className="flex justify-center text-xl">
                        <strong>{order.total_item}</strong>
                        <span>-</span>
                        <strong>0</strong>
                     </div>
                  
                     <div className="absolute right-0 top-0">
                        <span className="text-sm">25<span>min ago</span></span>
                     </div>
                  </div>
                  <div className="border-b-2 font-semibold">
                     {
                        order.item.map((item)=>{
                           let type = undefined;
                           if(item.type == 1) type = "🍞";
                           if(item.type == 2) type = "🍴";
                           if(item.type == 3) type = "🍷";
                           if(item.type == 4) type = "🍰";
                           return(
                              <span className="ml-1">{item.quantity}<span>{type}</span></span>
                           )
                        })

                     }
                     
                  </div>
                  <div className="h-16 flex flex-wrap overflow-y-scroll">
                     
                        {
                           order.item.map((item)=>{
                              //continue
                              return(
                              (item.extra_ings || item.remove_ings)?
                              <div className="flex mr-2">
                                 <span>2</span>
                                 <span>chicken roast</span>
                                 <span> ..C,</span>
                              </div>
                              :
                              <span></span>
                              )
                           })
                           
                        }
                    
                  </div>
               </div>
            ))
            :
            <p>No Orders</p>
            
         }
      </>
   )
};

export{Card}