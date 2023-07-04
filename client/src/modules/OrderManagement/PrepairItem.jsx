import chefphoto from '../../assets/chef.png'
import gstyle from '../../gstyle.module.css'

const PrepareItem = ()=>{
   return(
      <div className="w-full h-full flex p-2 overflow-hidden overflow-x-scroll">
         <div className='flex flex-col'>
            <div className={`${gstyle.w400px} m-2 h-fit border border-black rounded-lg p-2 `}>
               <div className="flex justify-between items-baseline text-2xl">
                  <strong>1dk1kdk</strong>
                  <span className='font-bold'>Table: <span>1</span></span>
               </div>
               <div className="relative">
                  <span className="absolute right-0 top-0 text-lg font-semibold text-gray-500">25<span>min</span></span>
               </div>
               <div className=''>
                  <span className='text-2xl font-bold'>a.</span>
                  <div className='font-semibold text-xl '>
                  
                     <span className='mx-1'>2</span>
                     <span>name</span>
                     <span className='ml-1'>C</span>
                  </div>
               </div>
               <div className='w-full text-lg ml-2 h-24 overflow-hidden overflow-y-scroll'>
                  <div className='w-full line-through mx-1 border-b-2 border-gray-200 border-dashed'>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                  </div>
                  <div className='w-full mx-1 '>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                  </div>
               </div>
               <div>
                  <h2 className='font-semibold'>chefs</h2>
                  <div className='flex justify-between'>
                     <div className='flex'>
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                     </div>
                     <span className='bg-black text-xl font-semibold text-white px-4 rounded-md shadow-md cursor-pointer'>done</span>
                  </div>
               </div>
            </div>
            <div className={`${gstyle.w400px} m-2 h-fit border border-black rounded-lg p-2 `}>
               <div className="flex justify-between items-baseline text-2xl">
                  <strong>1dk1kdk</strong>
                  <span className='font-bold'>Table: <span>1</span></span>
               </div>
               <div className="relative">
                  <span className="absolute right-0 top-0 text-lg font-semibold text-gray-500">25<span>min</span></span>
               </div>
               <div className=''>
                  <span className='text-2xl font-bold'>a.</span>
                  <div className='font-semibold text-xl '>
                  
                     <span className='mx-1'>2</span>
                     <span>name</span>
                     <span className='ml-1'>C</span>
                  </div>
               </div>
               <div className='w-full text-lg ml-2 h-24 overflow-hidden overflow-y-scroll'>
                  <div className='w-full line-through mx-1 border-b-2 border-gray-200 border-dashed'>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                  </div>
                  <div className='w-full mx-1 '>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                  </div>
               </div>
               <div>
                  <h2 className='font-semibold'>chefs</h2>
                  <div className='flex justify-between'>
                     <div className='flex'>
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                     </div>
                     <span className='bg-black text-xl font-semibold text-white px-4 rounded-md shadow-md cursor-pointer'>done</span>
                  </div>
               </div>
            </div>
         </div>

         <div className='flex flex-col'>
            <div className={`${gstyle.w400px} m-2 h-fit border border-black rounded-lg p-2 `}>
               <div className="flex justify-between items-baseline text-2xl">
                  <strong>1dk1kdk</strong>
                  <span className='font-bold'>Table: <span>1</span></span>
               </div>
               <div className="relative">
                  <span className="absolute right-0 top-0 text-lg font-semibold text-gray-500">25<span>min</span></span>
               </div>
               <div className=''>
                  <span className='text-2xl font-bold'>a.</span>
                  <div className='font-semibold text-xl '>
                  
                     <span className='mx-1'>2</span>
                     <span>name</span>
                     <span className='ml-1'>C</span>
                  </div>
               </div>
               <div className='w-full text-lg ml-2 h-24 overflow-hidden overflow-y-scroll'>
                  <div className='w-full line-through mx-1 border-b-2 border-gray-200 border-dashed'>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                  </div>
                  <div className='w-full mx-1 '>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                  </div>
               </div>
               <div>
                  <h2 className='font-semibold'>chefs</h2>
                  <div className='flex justify-between'>
                     <div className='flex'>
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                     </div>
                     <span className='bg-black text-xl font-semibold text-white px-4 rounded-md shadow-md cursor-pointer'>done</span>
                  </div>
               </div>
            </div>
            <div className={`${gstyle.w400px} m-2 h-fit border border-black rounded-lg p-2 `}>
               <div className="flex justify-between items-baseline text-2xl">
                  <strong>1dk1kdk</strong>
                  <span className='font-bold'>Table: <span>1</span></span>
               </div>
               <div className="relative">
                  <span className="absolute right-0 top-0 text-lg font-semibold text-gray-500">25<span>min</span></span>
               </div>
               <div className=''>
                  <span className='text-2xl font-bold'>a.</span>
                  <div className='font-semibold text-xl '>
                  
                     <span className='mx-1'>2</span>
                     <span>name</span>
                     <span className='ml-1'>C</span>
                  </div>
               </div>
               <div className='w-full text-lg ml-2 h-24 overflow-hidden overflow-y-scroll'>
                  <div className='w-full line-through mx-1 border-b-2 border-gray-200 border-dashed'>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                  </div>
                  <div className='w-full mx-1 '>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                  </div>
               </div>
               <div>
                  <h2 className='font-semibold'>chefs</h2>
                  <div className='flex justify-between'>
                     <div className='flex'>
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                     </div>
                     <span className='bg-black text-xl font-semibold text-white px-4 rounded-md shadow-md cursor-pointer'>done</span>
                  </div>
               </div>
            </div>
         </div>
         <div className='flex flex-col'>
            <div className={`${gstyle.w400px} m-2 h-fit border border-black rounded-lg p-2 `}>
               <div className="flex justify-between items-baseline text-2xl">
                  <strong>1dk1kdk</strong>
                  <span className='font-bold'>Table: <span>1</span></span>
               </div>
               <div className="relative">
                  <span className="absolute right-0 top-0 text-lg font-semibold text-gray-500">25<span>min</span></span>
               </div>
               <div className=''>
                  <span className='text-2xl font-bold'>a.</span>
                  <div className='font-semibold text-xl '>
                  
                     <span className='mx-1'>2</span>
                     <span>name</span>
                     <span className='ml-1'>C</span>
                  </div>
               </div>
               <div className='w-full text-lg ml-2 h-24 overflow-hidden overflow-y-scroll'>
                  <div className='w-full line-through mx-1 border-b-2 border-gray-200 border-dashed'>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                  </div>
                  <div className='w-full mx-1 '>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                  </div>
               </div>
               <div>
                  <h2 className='font-semibold'>chefs</h2>
                  <div className='flex justify-between'>
                     <div className='flex'>
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                     </div>
                     <span className='bg-black text-xl font-semibold text-white px-4 rounded-md shadow-md cursor-pointer'>done</span>
                  </div>
               </div>
            </div>
            <div className={`${gstyle.w400px} m-2 h-fit border border-black rounded-lg p-2 `}>
               <div className="flex justify-between items-baseline text-2xl">
                  <strong>1dk1kdk</strong>
                  <span className='font-bold'>Table: <span>1</span></span>
               </div>
               <div className="relative">
                  <span className="absolute right-0 top-0 text-lg font-semibold text-gray-500">25<span>min</span></span>
               </div>
               <div className=''>
                  <span className='text-2xl font-bold'>a.</span>
                  <div className='font-semibold text-xl '>
                  
                     <span className='mx-1'>2</span>
                     <span>name</span>
                     <span className='ml-1'>C</span>
                  </div>
               </div>
               <div className='w-full text-lg ml-2 h-24 overflow-hidden overflow-y-scroll'>
                  <div className='w-full line-through mx-1 border-b-2 border-gray-200 border-dashed'>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                     <span>ingredient<span>, </span></span>
                  </div>
                  <div className='w-full mx-1 '>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                     <span>2<span>x </span><span>ingredient</span>, </span>
                  </div>
               </div>
               <div>
                  <h2 className='font-semibold'>chefs</h2>
                  <div className='flex justify-between'>
                     <div className='flex'>
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                        <img className='w-8 border border-black p-1 mr-1 rounded-full' src={chefphoto} alt="" />
                     </div>
                     <span className='bg-black text-xl font-semibold text-white px-4 rounded-md shadow-md cursor-pointer'>done</span>
                  </div>
               </div>
            </div>
         </div>



      </div>
   )
}

export{PrepareItem}