import { useDispatch } from "react-redux";
import { API_OPTIONS, GET_MOVIE_VIDEO_URL , } from "../../utils/constants";
import { addMovieTrailer } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      GET_MOVIE_VIDEO_URL(movieId),
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    if(movieId){
        getMovieVideos();
    }
  }, [movieId]);
}
export default useMovieTrailer;