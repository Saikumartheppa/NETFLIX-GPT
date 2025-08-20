import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { GET_YOUTUBE_TRAILER_VIDEO } from "../../utils/constants";

const VideoBackGround = ({ movieId }) => {

  const trailer = useSelector(store => store.movies?.movieTrailer)
  useMovieTrailer(movieId);
  
  return (
    <div>
      <iframe className="youtube-iframe"
        src={GET_YOUTUBE_TRAILER_VIDEO(trailer?.key)}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
export default VideoBackGround;
