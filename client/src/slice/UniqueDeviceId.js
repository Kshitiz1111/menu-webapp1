import { createSlice } from "@reduxjs/toolkit";

const initialState={
   id: null
}
export const UniqueDeviceId = createSlice({
   name:"UniqueDeviceId",
   initialState,
   reducers:{
      getUDID:(state)=>{
         var navigator_info = window.navigator;
         var screen_info = window.screen;
         var uid = navigator_info.mimeTypes.length;
         uid += navigator_info.userAgent.replace(/\D+/g, '');
         uid += navigator_info.plugins.length;
         uid += screen_info.height || '';
         uid += screen_info.width || '';
         uid += screen_info.pixelDepth || '';
         
         state.id = uid;
      }
   }
})

export const {getUDID} = UniqueDeviceId.actions;
export default UniqueDeviceId.reducer;