import React, { useRef, useState } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link

} from "react-router-dom";

import Profilenavbar from '../admin/component/navbar';
import Profilesidebar from '../admin/component/sidebar';
import Dashboard from '../admin/pages/dashboard';




export default function AdminRoutes() {
    const [toogle, settoogle] = useState(false)

    return (
   
    <>
            <Profilenavbar />
            <Profilesidebar settoogle={settoogle} toogle={toogle} />
            <div style={{ marginLeft: toogle ? "60px" : "280px", marginTop: "100px" }}>
                <Routes>


                    <Route exact path='/dashboard' element={<Dashboard settoogle={settoogle} toogle={toogle} />} />
                  




                </Routes>
            </div>

            </>


            )
}
