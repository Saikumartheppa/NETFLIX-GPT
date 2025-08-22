import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API   } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../utils/moviesSlice";

const useUpcomingMovies = () => {
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    useEffect(() => {
        getUpcomingMovies();
    },[])
    const getUpcomingMovies  = async ()=> {
       const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
       const json = await data.json();
       dispatch(addUpcomingMovies(json.results));
    }
}
export default useUpcomingMovies;