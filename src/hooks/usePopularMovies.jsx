import { useEffect } from "react";
import { API_OPTIONS,  POPULAR_MOVIES_API } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    useEffect(() => {
        getPopularMovies();
    },[])
    const getPopularMovies  = async ()=> {
       const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
       const json = await data.json();
       dispatch(addPopularMovies(json.results));
    }
}
export default usePopularMovies;