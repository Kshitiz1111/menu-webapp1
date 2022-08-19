import './App.css';
import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import { Home } from './pages/Home';
import { Starter } from './pages/Starter';
import {FilterSidebar} from './modules/FilterSidebar';
import {InsertDish} from './pages/InsertDish';

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
        </Routes>
      </BrowserRouter>
  
  )


  
}

export default App;
