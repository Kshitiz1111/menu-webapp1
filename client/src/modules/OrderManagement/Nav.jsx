import gstyle  from '../../gstyle.module.css'
const Nav = ()=>{

   return(
      <div className='w-full bg-gray-200 flex justify-between p-4'>
         <div className={`${gstyle.nav} + flex-grow`}>
            <h1>OrderManagement</h1>
         </div>
         <div className={`${gstyle.fgrow2} + flex + justify-end`} >
            <div className='mr-2'>recent notifications</div>
            <div className="flex">
               <span>chef status</span>
               <i className="fa fa-caret-down"></i>
            </div>
         </div>
      </div>
   )
}

export{Nav}