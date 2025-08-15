import { HEADER_BACKGROUND_IMG } from "../../utils/constants";
import Header from "./Header";
import "../style.css";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="nav-container">
        <Header />
        <div className="signIn-container">
          <form className="sign-up-form">
            <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {
               !isSignInForm && <input type="text" placeholder="Enter your Full Name"></input>
            }
            <input type="text" placeholder="Email or Mobile number"></input>
            <input type="text" placeholder="Password"></input>
            <button> {isSignInForm ? 'Sign In' : 'Sign Up' }</button>
            <div className="sign-up-text">
              <span>
                {isSignInForm ? "New to Netflix?" : "Already Registered?"}
                <p onClick={toggleSignInForm}>
                  {isSignInForm ? "Sign up now" : "Sign in now"}
                </p>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
