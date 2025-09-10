import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div>
      <div className="movie-container">
        <h3>{title}</h3>
        <div className="movie-card-container">
          {movies.map((movie) => {
            return (
              <MovieCard key={movie?.id} posterPath={movie?.backdrop_path} />
            );
          })}
          {/* <MovieCard posterPath={movies[0]?.poster_path} /> */}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
