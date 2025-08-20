import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";

const useNowPlayingMovies = () => {
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    useEffect(() => {
        getNowPlayingMovies();
    },[])
    const getNowPlayingMovies  = async ()=> {
       const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
       const json = await data.json();
       dispatch(addNowPlayingMovies(json.results));
    }
}
export default useNowPlayingMovies;