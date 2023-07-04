import gstyle  from '../../gstyle.module.css'
import plus from '../../assets/plus.ico'
import chefphoto from '../../assets/chef.png'
import { PrepareItem } from "../../modules/OrderManagement/PrepairItem.jsx";


let chefs = [
   {id:332,name:"chef1",level:"junior",assignedDish:[{id:null,name:null},{id:2,name:null}],shift:"M",available:1},
   {id:532,name:"chef2",level:"deputy",assignedDish:[{id:null,name:null},{id:2,name:null}],shift:"M",available:1},
   {id:322,name:"chef3",level:"head",assignedDish:[{id:null,name:null},{id:2,name:null}],shift:"M",available:1},
   {id:352,name:"chef9",level:"head1",assignedDish:[{id:null,name:null},{id:2,name:null}],shift:"M",available:1},
   {id:7332,name:"chef4",level:"executive",assignedDish:[{id:null,name:null},{id:2,name:null}],shift:"M",available:1}
]

const AssignOrder = ()=>{
   return(
      <div className="flex flex-wrap w-full">
         <div className="flex flex-col flex-wrap flex-grow max-w-xl">
            <div className='flex mb-2 flex-wrap justify-evenly max-h-40 overflow-y-scroll'>
               <div className="border p-1 mb-1 w-64 rounded-xl shadow-md">
                  <div className="flex justify-between">
                     <span>T-<span>2</span></span>
                     <span>01029302</span>
                  </div>
                  <div className='flex justify-between flex-wrap max-w-xs'>
                     <div className='flex flex-col'>
                        <span>25 <span>min</span></span>
                        <div className="font-semibold">
                           <span className="pr-1">1<span>S</span></span>
                           <span className="px-1">1<span>M</span></span>
                           <span className="px-1">1<span>D</span></span>
                           <span className="px-1">1<span>D</span></span>
                        </div>
                     </div>
                     <div className='flex flex-col'>
                        <div className="font-semibold">
                           <span className="border border-black rounded-full px-1">1<span>S</span></span>
                           <span className="border border-black rounded-full px-1">1<span>M</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                        </div>
                        <div className="font-semibold">
                           <span className="pl-2">1<span>S</span></span>
                           <span className="pl-2">1<span>M</span></span>
                           <span className="pl-2">1<span>D</span></span>
                           <span className="pl-2">1<span>D</span></span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="border p-1 mb-1 w-64 rounded-xl shadow-md">
                  <div className="flex justify-between">
                     <span>T-<span>2</span></span>
                     <span>01029302</span>
                  </div>
                  <div className='flex justify-between flex-wrap max-w-xs'>
                     <div className='flex flex-col'>
                        <span>25 <span>min</span></span>
                        <div className="font-semibold">
                           <span className="pr-1">1<span>S</span></span>
                           <span className="px-1">1<span>M</span></span>
                           <span className="px-1">1<span>D</span></span>
                           <span className="px-1">1<span>D</span></span>
                        </div>
                     </div>
                     <div className='flex flex-col'>
                        <div className="font-semibold">
                           <span className="border border-black rounded-full px-1">1<span>S</span></span>
                           <span className="border border-black rounded-full px-1">1<span>M</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                        </div>
                        <div className="font-semibold">
                           <span className="pl-2">1<span>S</span></span>
                           <span className="pl-2">1<span>M</span></span>
                           <span className="pl-2">1<span>D</span></span>
                           <span className="pl-2">1<span>D</span></span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="border  p-1 mb-1 w-64 rounded-xl shadow-md">
                  <div className="flex justify-between">
                     <span>T-<span>2</span></span>
                     <span>01029302</span>
                  </div>
                  <div className='flex justify-between flex-wrap max-w-xs'>
                     <div className='flex flex-col'>
                        <span>25 <span>min</span></span>
                        <div className="font-semibold">
                           <span className="pr-1">1<span>S</span></span>
                           <span className="px-1">1<span>M</span></span>
                           <span className="px-1">1<span>D</span></span>
                           <span className="px-1">1<span>D</span></span>
                        </div>
                     </div>
                     <div className='flex flex-col'>
                        <div className="font-semibold">
                           <span className="border border-black rounded-full px-1">1<span>S</span></span>
                           <span className="border border-black rounded-full px-1">1<span>M</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                        </div>
                        <div className="font-semibold">
                           <span className="pl-2">1<span>S</span></span>
                           <span className="pl-2">1<span>M</span></span>
                           <span className="pl-2">1<span>D</span></span>
                           <span className="pl-2">1<span>D</span></span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="border p-1 mb-1 w-64  rounded-xl shadow-md">
                  <div className="flex justify-between">
                     <span>T-<span>2</span></span>
                     <span>01029302</span>
                  </div>
                  <div className='flex justify-between flex-wrap max-w-xs'>
                     <div className='flex flex-col'>
                        <span>25 <span>min</span></span>
                        <div className="font-semibold">
                           <span className="pr-1">1<span>S</span></span>
                           <span className="px-1">1<span>M</span></span>
                           <span className="px-1">1<span>D</span></span>
                           <span className="px-1">1<span>D</span></span>
                        </div>
                     </div>
                     <div className='flex flex-col'>
                        <div className="font-semibold">
                           <span className="border border-black rounded-full px-1">1<span>S</span></span>
                           <span className="border border-black rounded-full px-1">1<span>M</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                           <span className="border border-black rounded-full px-1">1<span>D</span></span>
                        </div>
                        <div className="font-semibold">
                           <span className="pl-2">1<span>S</span></span>
                           <span className="pl-2">1<span>M</span></span>
                           <span className="pl-2">1<span>D</span></span>
                           <span className="pl-2">1<span>D</span></span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            <div className={`flex  py-2`}>
               <div className={`${gstyle.flexgrow3} border-t-2 p-2 shadow-md rounded-md bg-gray-100`}>
                  <div className="flex justify-between items-baseline text-lg">
                     <span className='font-bold'>Table: <span className="text-lg">1</span></span>
                     <strong>1dk1kdk</strong>
                  </div>
                  <div className="relative">
                     <div className="flex justify-center text-2xl">
                        <strong>4</strong>
                        <span>-</span>
                        <strong>0</strong>
                     </div>
                  
                     <div className="absolute right-0 top-0">
                        <span className="text-base">25<span>min</span></span>
                     </div>
                  </div>
                  <div className='w-fit border-b-2 border-black'>
                     <span>1<span>S</span></span>
                     <span className="ml-1">1<span>M</span></span>
                     <span className="ml-1">1<span>D</span></span>
                     <span className="ml-1">1<span>D</span></span>
                  </div>
                  <div>
                     <div className='flex justify-between mt-2 '>
                        <span className='border-b-2 border-black font-bold'>Items</span>
                        <span className='border-b-2 border-black font-bold'>assign chef</span>
                     </div>
                     <div>

                        <div className='border-b-2 border-black border-dashed'>
                           <div className='flex p-1 justify-between '>
                              <div className=''>
                                 <div className='font-semibold text-lg '>
                                    <span className='text-2xl font-bold'>a.</span>
                                    <span className='mx-1 text-lg'>2</span>
                                    <span>name</span>
                                    <span className='ml-1'>C</span>
                                 </div>
                                 <div className='w-full'>
                                    <div className='w-full line-through mx-1 border-b-2 border-gray-200 border-dashed'>
                                       <span>ingredient<span>,</span></span>
                                    </div>
                                    <div className='w-full mx-1'>
                                       <span>2<span>x </span><span>ingredient</span>,</span>

                                    </div>
                                 </div>
                              </div>
                              <div className='relative my-2'>
                                 <img src={chefphoto} alt="" className='w-4 absolute top-0 right-0' />
                                 <img src={plus}  alt="sorticon" className='w-4/5 p-2 rounded-full border border-black shadow-md ' />
                              </div>
                           </div>
                           <div className='flex justify-between'>
                              <div className='flex'>
                                 <div className='relative w-fit m-1'>
                                    <img className='w-6 border border-black p-1 rounded-full' src={chefphoto} alt="" />
                                    <span className='absolute -top-2 -right-2 text-white bg-black text-xs border border-black px-1 py-0 rounded-full'>x</span>
                                 </div>
                                 <div className='relative w-fit m-1'>
                                    <img className='w-6 border border-black p-1 rounded-full' src={chefphoto} alt="" />
                                    <span className='absolute -top-2 -right-2 text-white bg-black text-xs border border-black px-1 py-0 rounded-full'>x</span>
                                 </div>
                              </div>
                              <span className='bg-black text-white px-1 mb-1 rounded-md shadow-md cursor-pointer'>start</span>
                           </div>
                          
                        </div>

                        <div className='border-b-2 border-black border-dashed'>
                           <div className='flex p-1 justify-between '>
                              <div className=''>
                                 <div className='font-semibold text-lg '>
                                    <span className='text-2xl font-bold'>a.</span>
                                    <span className='mx-1 text-lg'>2</span>
                                    <span>name</span>
                                    <span className='ml-1'>C</span>
                                 </div>
                                
                              </div>
                              <div className='relative my-2'>
                                 <img src={chefphoto} alt="" className='w-4 absolute top-0 right-0' />
                                 <img src={plus}  alt="sorticon" className='w-4/5 p-2 rounded-full border border-black shadow-md ' />
                              </div>
                           </div>
                           <div className='flex justify-between'>
                              <div className='flex'>
                                 <div className='relative w-fit m-1'>
                                    <img className='w-6 border border-black p-1 rounded-full' src={chefphoto} alt="" />
                                    <span className='absolute -top-2 -right-2 text-white bg-black text-xs border border-black px-1 py-0 rounded-full'>x</span>
                                 </div>
                                 <div className='relative w-fit m-1'>
                                    <img className='w-6 border border-black p-1 rounded-full' src={chefphoto} alt="" />
                                    <span className='absolute -top-2 -right-2 text-white bg-black text-xs border border-black px-1 py-0 rounded-full'>x</span>
                                 </div>
                              </div>
                              <span className='bg-black text-white px-1 mb-1 rounded-md shadow-md cursor-pointer'>start</span>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>

               <div className='flex-grow py-2 my-3 rounded-tr-lg rounded-br-lg bg-gray-400 h-96 overflow-y-scroll'>
                  <p className='text-center font-semibold text-white text-xl'>chefs</p>
                  {
                     chefs?.map((chef)=>
                        <div key={chef.id} className='relative p-1 my-2'>
                           <span className='absolute -top-2 right-1 text-sm text-gray-700'>{chef.level}</span>
                           <div className='flex'>
                              <div className='relative w-fit'>
                                 <img className='w-6 border border-black p-1 rounded-full' src={chefphoto} alt="" />
                                 <span className='absolute -top-2 -right-2 text-white bg-black text-xs border border-black px-1 py-0 rounded-full'>{chef.assignedDish.length}</span>
                              </div>
                              <span className='font-semibold ml-1'>{chef.name}</span>
                           </div>
                           <div className='bg-black text-white rounded-md text-center m-2  cursor-pointer'>
                              <span>select</span>
                           </div>
                        </div>
                     )
                  }
               </div>
            </div>

         </div>
         <div className={`${gstyle.w60percent} ${gstyle.minw20percent}`}>
            <PrepareItem></PrepareItem>
         </div>
      </div>
   )
}

export{AssignOrder}