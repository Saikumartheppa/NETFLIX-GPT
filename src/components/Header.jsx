import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants";
import "../style.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { useEffect } from "react";
import search from "../assets/search.svg";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { changeLanuage } from "../../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unSubscribe when component unMounts
    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/errorPage");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanuage(e.target.value)); 
  }
  return (
    <div className="gradient">
      <div className="nav">
        <div className="nav-img">
          <img src={NETFLIX_LOGO} alt="LOGO" />
        </div>
        <div>
          {user ? (
            <div className="sign-in">
              <select className="language-container" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <div
                className="gpt-search-icons-container"
                onClick={handleGptSearchClick}
              >
                <img className="search-icon" src={search} alt="Search-Icon" />
                <button className="gpt-search-btn">GPT Search</button>
              </div>
              <img src={user?.photoURL} />
              <button className="sign-in-out-btn" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          ) : (
            <button className="sign-in-out-btn" onClick={handleSignOut}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
