import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.upcomingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    const {original_title , overview , id} = mainMovie;
    return (
        <div>
            <VideoBackGround movieId = {id}/>
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
}
export default MainContainer;