import React, { useRef } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";
import Navbar from '../components/navbar';
import HomePage from '../pages/homePage';
import Footer from '../components/footer';
import BookLists from '../pages/bookLists';
import BookDetails from '../pages/bookDetails';
import Signup from '../services/signup';
import Signin from '../services/login';
import Cart from '../pages/cart';




export default function BookRoutes() {
  
  return (
   
    <>
    <Navbar  />
        <Routes>

         <Route exact path='/' element={<HomePage />}/> 
         <Route exact path='/allbooks' element={<BookLists />}/> 
         <Route exact path='/signup' element={<Signup />}/> 
         <Route exact path='/signin' element={<Signin />}/> 
         <Route exact path='/cart' element={<Cart />}/> 
         <Route exact path='/book/:id' element={<BookDetails />}/> 
        
      

         

            
        </Routes>
        <Footer/>
        
    </>
      
    
  )
}
