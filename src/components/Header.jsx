import { NETFLIX_LOGO } from "../../utils/constants";
import "../style.css";
const Header = () => {
  return (
        <div className="gradient">
        <div className="nav">
          <div className="nav-img">
            <img src={NETFLIX_LOGO} alt="LOGO" />
          </div>
        </div>
      </div>
  );
};
export default Header;
