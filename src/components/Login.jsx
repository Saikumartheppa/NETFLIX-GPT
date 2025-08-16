import { HEADER_BACKGROUND_IMG } from "../../utils/constants";
import Header from "./Header";
import "../style.css";
import { useRef, useState } from "react";
import { checkIfValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkIfValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });
    }
  };
  return (
    <div>
      <div className="nav-container">
        <Header />
        <div className="signIn-container">
          <form onSubmit={(e) => e.preventDefault()} className="sign-up-form">
            <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Enter your Full Name"
              ></input>
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email or Mobile number"
            ></input>
            <input ref={password} type="text" placeholder="Password"></input>
            <p className="error-text">{errorMessage}</p>
            <button onClick={handleButtonClick}>
              {" "}
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
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
