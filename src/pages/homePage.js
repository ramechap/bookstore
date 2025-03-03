import React from 'react'
import Bookcard from '../components/bookcard'
import "../pages/homepage.css"

import animationData from '../assets/homelogo.json';
import logo from "../assets/logo.jpg";
import Lottie from 'react-lottie';
import Contact from '../components/contact';
export default function HomePage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>


            <div class="home jumbotron">
                <div class="container" style={{display:"flex"}}>
                    <div className='desc-contain'>
                    <h1 class="display-3 text-warning">Discover Your Next Great Read</h1>
                    <p>Uncover captivating stories, enriching knwledge, and endlesss inspiration in our curate collection of books</p>
                    <p><a  style={{borderRadius:"20px"}} class="btn btn-outline-dark btn-lg ll  " href="#" role="button">Discover Books</a></p>

                    </div>
                    <div className='image-contain'>
                    <Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
      />

                    </div>
                </div>
            </div>

            <div class="container  py-5 recent" >
                    <h3 class="display-5 text-warning">Recently Added Books</h3>
                <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
                    <Bookcard/>
                    <Bookcard/>
                    <Bookcard/>
                    <Bookcard/>
                </div>

                <hr />


            </div>
            <div className='contactpage'>
                <Contact/>
            </div>

        </div>
    )
}
