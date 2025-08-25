import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API   } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../../utils/moviesSlice";

const useUpcomingMovies = () => {
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    useEffect(() => {
       !upcomingMovies && getUpcomingMovies();
    },[])
    const getUpcomingMovies  = async ()=> {
       const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
       const json = await data.json();
       dispatch(addUpcomingMovies(json.results));
    }
}
export default useUpcomingMovies;