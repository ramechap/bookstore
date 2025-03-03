import React, { useRef } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";
import BookRoutes from './bookRoutes';
import AdminRoutes from './adminRoutes';





export default function AllRoute() {
 
  return (
   
   <>
   <BrowserRouter>
   <Routes>
        
        <Route path="/*" element={<BookRoutes/>} />

        
        <Route path="/admin/*" element={<AdminRoutes/>} />

       
      </Routes>
   </BrowserRouter>
   </>
      
    
  )
}
