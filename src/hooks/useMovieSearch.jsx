import { useState } from "react";
import { API_OPTIONS, SEARCH_MOVIE_API } from "../../utils/constants";
import openai from "../../utils/openai";
import { addGptMovieResult } from "../../utils/gptSlice";
import { useDispatch } from "react-redux";

const useMovieSearch = () => { 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // helper function
  const searchMovieTMBD = async (movieName) => {
    const data = await fetch(SEARCH_MOVIE_API(movieName), API_OPTIONS);
    const json = await data.json();
    return json?.results || [];
  };

  // main function exposed to component
  const searchMovies = async (queryValue) => {
    try {
      setLoading(true);
      setError(null);

      const aiQuery = `You are a movie recommendation system. Suggest exactly 10 unique movies for the query: ${queryValue}. 
Match the query’s language, genre, or context. Return only movie names, comma-separated, no extra text.`;

      const aiResponse = await openai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: aiQuery,
      });

      const aiMovies = aiResponse.text.split(",").map((m) => m.trim());

      // call TMDB for each movie
      const promiseArray = aiMovies.map((movie) => {
        return searchMovieTMBD(movie);
      });
      const tmbdResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({movieNames : aiMovies , movieResults : tmbdResults}));
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, searchMovies };
};

export default useMovieSearch;