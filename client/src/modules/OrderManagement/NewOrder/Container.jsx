import {Card} from './Card';
import sort from '../../../assets/sort.ico'

const Container  = ()=>{
   return(
      <div className="p-3 my-1 relative h-48">
         <Card></Card>
         <div className='absolute right-0 top-0 w-32 h-full bg-gray-400 rounded-md'>
            <div className='absolute top-0 right-0 flex justify-center items-center px-4 py-1 bg-gray-500 rounded-md shadow-md'>
               <span className='font-semibold text-white text-lg mr-1'>sort</span>
               <img src={sort}  alt="sorticon" />
            </div>
            <div className='absolute bottom-3 left-3 font-bold text-2xl text-white'>
               <span>New</span><br />
               <span>Orders</span><br />
               <span>20</span>
            </div>
         </div>
      </div>
   )
};

export{Container}