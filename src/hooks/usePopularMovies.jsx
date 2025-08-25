import { useEffect } from "react";
import { API_OPTIONS,  POPULAR_MOVIES_API } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {
    const popularMovies = useSelector(store => store.movies.popularMovies);
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    useEffect(() => {
        !popularMovies && getPopularMovies();
    },[])
    const getPopularMovies  = async ()=> {
       const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
       const json = await data.json();
       dispatch(addPopularMovies(json.results));
    }
}
export default usePopularMovies;