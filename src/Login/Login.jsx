import React from "react";
import "./Login_cs.css";

function Login() {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src="/images/amazon.png" alt="" />
      </div>

      <div className="signinForm">
        <form>
          <p className="signinForm_text">Sign In</p>
        
          <div className="formField">
          <h4 className="signinForm__label">
            Email or mobile phone number
          </h4>
          <input type="email" required name="email" />
          </div>
          
          <div className="formField">
          <h4 className="signinForm__label">Password</h4>
          <a href="#">Forgot Password</a>
          <input type="password" required name="password"/>
          </div>
    
          <button className="signinForm_btn">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
