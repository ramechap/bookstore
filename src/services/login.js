import React from 'react'
import "./login.css"


import logo from "../assets/logo.jpg";
export default function Signin() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
            <div className='home'>
                <div className='container auth py-5'>
                <form class="form-signin">
                <img class="mb-4" src={logo} alt="" width="72" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Login Now</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Sign in</button>

            </form>

                </div>
            </div>
        </div>
    )
}
