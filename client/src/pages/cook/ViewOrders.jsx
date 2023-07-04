import React from "react";
import axios from "axios";
import { Nav } from "../../modules/OrderManagement/Nav.jsx";
import { Container } from "../../modules/OrderManagement/NewOrder/Container.jsx";
import { AssignOrder } from "../../modules/OrderManagement/AssignOrders.jsx";

const ViewOrders = ()=>{

   React.useEffect(()=>{
      try {
        axios.get("http://localhost:3001/post/order")
        .then((res)=>{  
            console.log(res.data);
        })
        
      } catch (error) {
        console.log(error);
      }
    },[])

   return(
      <div>
        <Nav></Nav>
        <Container></Container>
        <div className="flex flex-wrap p-4">
          <AssignOrder></AssignOrder>
        
        </div>
      </div>
   )
}

export{ViewOrders};