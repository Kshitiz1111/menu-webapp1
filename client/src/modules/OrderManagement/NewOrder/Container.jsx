import {Card} from './Card';
import sort from '../../../assets/sort.ico'

const Container  = ()=>{
   return(
      <div className="border p-3 my-3 relative h-48">
         <Card></Card>
         <div className='flex flex-col justify-between absolute right-0 top-0 h-full bg-gray-400 rounded p-2'>
            <div className='flex justify-center items-center p-1 bg-gray-300 rounded shadow-md'>
               <span className='font-bold text-lg mr-1'>sort</span>
               <img src={sort} alt="sorticon" />
            </div>
            <div className='font-bold text-2xl text-white'>
               <span>New</span><br />
               <span>Orders</span><br />
               <span>20</span>
            </div>
         </div>
      </div>
   )
};

export{Container}