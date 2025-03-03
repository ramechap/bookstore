import React from 'react'
import Bookcard from '../components/bookcard'
import "../pages/booklists.css"
export default function BookLists() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div className='home'>
        <div class="container py-5">
    <h2 class="text-center mb-4">Our Books</h2>
    <form class="form-inline text-center mb-4 my-2 py-5 my-lg-0 searchnow">
      <input class="form-control searchinput mr-sm-2" type="search" placeholder="Find Book" aria-label="Search"/>
      
    </form>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
       <Bookcard/>
    </div>
</div>

        </div>
    </div>
  )
}
