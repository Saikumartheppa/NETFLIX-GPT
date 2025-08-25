import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    },[])
    const getNowPlayingMovies  = async ()=> {
       const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);
       const json = await data.json();
       dispatch(addNowPlayingMovies(json.results));
    }
}
export default useNowPlayingMovies;