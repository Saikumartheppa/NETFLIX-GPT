import { NETFLIX_LOGO } from "../../utils/constants";
import "../style.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { useEffect } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  useEffect(() => {
    onAuthStateChanged( auth, (user) => {
      if (user) {
        const {uid, email , displayName} = user;
        dispatch(addUser({uid : uid , email : email , displayName : displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/errorPage");
      });
  };
  return (
    <div className="gradient">
      <div className="nav">
        <div className="nav-img">
          <img src={NETFLIX_LOGO} alt="LOGO" />
        </div>
        <div>
          <img />
          {console.log(user)}
          {user ? (
            <button className="sign-out-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
              <button className="sign-out-btn" onClick={handleSignOut}>
                Sign In
              </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
