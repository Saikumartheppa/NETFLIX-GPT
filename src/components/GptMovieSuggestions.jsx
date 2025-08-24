import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import "../style.css";
const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  console.log(movieNames);
  console.log(movieResults);
  if (!movieNames) return null;
  return (
    <div className="movie-suggestion-container">
      <div className="movie-suggestion-inner-container">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
