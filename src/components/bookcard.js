import React from 'react'
import logo from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';
import "../pages/homepage.css"
export default function Bookcard() {
    const navigate=useNavigate()
    const TakemeToBook=(id)=>{
        navigate(`/book/${id}`)
    }
  return (
    <div class="col " onClick={()=>TakemeToBook("product1")}>
            <div class="card cartss h-100 shadow-sm">
                <img src={logo} width={100} height={250} class="card-img-top" alt="Product 1"/>
                <div class="card-body">
                <h5 style={{fontSize:"25px"}} class="card-title">Card title</h5>
                <p style={{color:"#787878d6"}} class="card-text">By Sujan Shrestha</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0">$19.99</span>
                        <button class="btn btn-outline-dark"><i class="bi bi-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
