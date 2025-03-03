import React from 'react'
import "../pages/cart.css"
import { MdOutlineDeleteForever } from "react-icons/md";
export default function Cart() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div className='home '>
        <div class="container cartt px-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-5">
            <h4 class="heading">Shopping Books</h4>
        </div>
        <div class="col-7">
            <div class="row text-right">
                
                <div class="col-4">
                    <h6 class="mt-2">Quantity</h6>
                </div>
                <div class="col-4">
                    <h6 class="mt-2">Price</h6>
                </div>
                <div class="col-4">
                    <h6 class="mt-2">Action</h6>
                </div>
            </div>
        </div>
    </div>

    <div className='d-grid my-2 gap-3'>
    <div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="book">
                    <img src="https://i.imgur.com/2DsA49b.jpg" class="book-img"/>
                </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">Thinking, Fast and Slow</h6>
                    <p class="mob-text">Daniel Kahneman</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
              
                <div class="col-4">
                    <div class="row d-flex justify-content-end px-3">
                        <p class="mb-0" id="cnt1">1</p>
                       
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">$9.99</h6>
                </div>
                <div class="col-4">
                   <button className='btn btn-danger'><MdOutlineDeleteForever /></button>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center border-top">
        <div class="col-5">
            <div class="row d-flex">
                <div class="book">
                    <img src="https://i.imgur.com/2DsA49b.jpg" class="book-img"/>
                </div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">Thinking, Fast and Slow</h6>
                    <p class="mob-text">Daniel Kahneman</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
              
                <div class="col-4">
                    <div class="row d-flex justify-content-end px-3">
                        <p class="mb-0" id="cnt1">1</p>
                       
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">$9.99</h6>
                </div>
                <div class="col-4">
                   <button className='btn btn-danger'><MdOutlineDeleteForever /></button>
                </div>
            </div>
        </div>
    </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-lg-12">
            <div class="card">
                <div class="row bookst">
                  
                   
                    <div class="col-lg-4 mt-2">
                        <div class="row d-flex justify-content-between px-4">
                            <p class="mb-1 text-left">Subtotal</p>
                            <h6 class="mb-1 text-right">$23.49</h6>
                        </div>
                     
                        <div class="row d-flex justify-content-between px-4" id="tax">
                            <p class="mb-1 text-left">Total (tax included)</p>
                            <h6 class="mb-1 text-right">$26.48</h6>
                        </div>
                        <button class="btn-block btn-blue">
                            <span>
                                <span id="checkout">Checkout</span>
                                <span id="check-amt">$26.48</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    </div>
  )
}
