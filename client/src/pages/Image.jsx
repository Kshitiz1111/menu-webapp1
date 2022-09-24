// import React from "react";
// import axios from "axios";

// const Image = ()=>{

//    const [file, setFile] = React.useState();
//    const [fileName, setFileName] = React.useState("");

//    function saveFile(e){
//       // console.log(e.target.files[0]);
//       setFile(e.target.files[0]);
//       setFileName(e.target.files[0].name);
//    };
//    const uploadFile = async (e)=>{
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("fileName", fileName);

//       try {
//          const res = await axios.post(
//             "http://localhost:3001/post/uploadimage",
//             formData
//          );
//          console.log(res);
//       } catch (error) {
//          console.log(error);
//       }
//    };
//    return(
//       <div>
//          <input type="file" onChange={(e)=>saveFile(e)} />
//          <div onClick={(e)=>uploadFile(e)}>Upload</div>
//       </div>
//    )
// }

// export {Image};