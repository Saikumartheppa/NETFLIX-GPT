import MoreInfoIcon from "../assets/moreInfoIcon.svg";
import playIcon from "../assets/play.svg";
import "../style.css";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="video-title-container">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className="video-title-buttons-container">
        <div className="play-container">
          <img src={playIcon} />
          <button>Play</button>
        </div>
        <div className="more-info-container">
          <img src={MoreInfoIcon} />
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
