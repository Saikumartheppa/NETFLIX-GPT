import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="secondary-container">
      <div className="movies-container">
        <MovieList
          title={"Your Next Watch"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={"Popular Movies"}
          movies={movies?.popularMovies}
        />
        <MovieList
          title={"Top Rated Movies"}
          movies={movies?.topRatedMovies}
        />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies?.upcomingMovies}
        />
        <MovieList
          title={"Telugu-Language Movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={"Top 10 Movies in India Today"}
          movies={movies?.nowPlayingMovies}
        />
      </div>
    </div>
  );
};
export default SecondaryContainer;
