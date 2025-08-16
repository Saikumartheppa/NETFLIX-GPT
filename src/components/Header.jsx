import { NETFLIX_LOGO } from "../../utils/constants";
import "../style.css";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
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
