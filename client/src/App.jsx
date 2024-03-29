import './App.css';
import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import { Home } from './pages/Home';
import { Starter } from './pages/Starter';
import {FilterSidebar} from './modules/FilterSidebar';
import {InsertDish} from './pages/InsertDish';
import { ViewOrders } from './pages/cook/ViewOrders';

// import {Image} from './pages/Image';
function App() {

  return(

      <BrowserRouter>
        <Routes>
          <Route exact path="/"
           element={<Home/>}>
          </Route>
          <Route path="/starter"
            element={<Starter/>}>
          </Route>
          <Route path="/main"
            element={<FilterSidebar/>}>
          </Route>
          <Route path="/insert"
            element={<InsertDish/>}>
          </Route>
          <Route path="/allOrders"
            element={<ViewOrders/>}>
          </Route>
          {/* <Route path="/upload"
            element={<Image/>}>
          </Route> */}
        </Routes>
      </BrowserRouter>
  
  )


  
}

export default App;
