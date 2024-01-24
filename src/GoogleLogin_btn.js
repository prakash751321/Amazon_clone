import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { signInWithGooglePopup } from "./firebase";
import { FcGoogle } from "react-icons/fc";
import "./Cl_Login.css";

function GoogleLogin_btn() {
  const history = useHistory();

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
      .then((auth) => {
        //  logged in, redirect to homepage
        history.push("/"); //  it will redirect to homepage
      })
      .catch((e) => alert(e.message));

    // console.log(response);
  };

  return (
    <div>
      <button className="googleBtn" onClick={logGoogleUser}>
        <FcGoogle /> Sign in with Google
      </button>
    </div>
  );
}

export default GoogleLogin_btn;
