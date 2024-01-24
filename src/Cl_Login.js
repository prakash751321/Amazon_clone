import React, { useState } from 'react'
import "./Cl_Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from './firebase'
import GoogleLogin_btn from './GoogleLogin_btn'

function Cl_Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault() // this stops the browser refresh
        //  do the login login  
        auth.signInWithEmailAndPassword(email, password)
        .then( (auth) =>{
            //  logged in, redirect to homepage
            history.push("/")       //  it will redirect to homepage
        })
        .catch( (e) => alert(e.message))
    }

    const register = (event) => {
        event.preventDefault() // this stops the browser refresh
        //  do the register login  
        auth.createUserWithEmailAndPassword(email, password)
        .then( (auth) =>{
            // created a user and logged in, redirect to homepage
            history.push("/")       //  it will redirect to homepage
        })
        .catch( (e) => alert(e.message))
    }

  return (
    <div className="login">
        <Link to="/">
            <img className='login_logo' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            {/* <img src="/public/images/amazon.png" alt="" /> */}
        </Link>  
        <div className="login_container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="email" onChange={event => setEmail(event.target.value)} value={email} />
                <h5>Password</h5>
                <input type="password" onChange={event => setPassword(event.target.value)} value={password} />
                <button onClick={login} type='submit' className='login_signInButton'>Sign in</button>
            </form>
            <p>By sign-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.</p>
            <button onClick={register} className='login_registerButton'>Create Your Amazon Account</button>
            <GoogleLogin_btn />
        </div>
    </div>
  )
}

export default Cl_Login