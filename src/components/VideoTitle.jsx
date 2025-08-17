import MoreInfoIcon from "../assets/moreInfoIcon.svg";
import playIcon from "../assets/play.svg";
import "../style.css";
const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <div>
          <img src={MoreInfoIcon} />
          <button>Play</button>
        </div>
        <div>
          <img src={playIcon} />
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
