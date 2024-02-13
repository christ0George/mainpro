
import './App.css';
// import Category from './components/Category/Category';
import Subcategory from './components/Subcategory/Subcategory';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Categorydetails from './components/Category/Categorydetails';
import Subcategorydetails from './components/Subcategory/Subcategorydetails';
import Home from './components/Adminpanel/Home';
import Sidebar from './components/Adminpanel/Sidebar';
import Topbar from './components/Adminpanel/Topbar';
import React, { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';

  function App() {
    
  
  return (
    <div className='App'>
            
      
      <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Login/>}></Route>
        <Route path={'/Home'}element={<Home />}></Route>
        {/* <Route path={'/viewdetails'}element={<Categorydetails method='get'/>}></Route> */}
        <Route path={'/sview'}element={<Subcategorydetails method='get'/>}></Route>
        
       <Route path='/s'element={<Subcategory method='post'/>}/>
      {/* <Route path='/c'element={<Category method='post'/>}/> */}
      
      </Routes>
     </BrowserRouter>
     <Footer/>
    
    </div>
  );
}

export default App; 
