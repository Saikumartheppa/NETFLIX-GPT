import { NETFLIX_BG_URL, PROFILE_ICON } from "../../utils/constants";
import Header from "./Header";
import "../style.css";
import { useRef, useState } from "react";
import { checkIfValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
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
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: PROFILE_ICON,
          })
            .then(() => {
              const {uid , email , displayName , photoURL} = auth.currentUser;
              dispatch(addUser({
                uid : uid,
                email: email,
                displayName : displayName,
                photoURL : photoURL,
              }));
            })
            .catch((error) => {
               setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="nav-container" style={{backgroundImage:`url(${NETFLIX_BG_URL})`}}>
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
