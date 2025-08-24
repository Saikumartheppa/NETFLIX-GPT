import search from "../assets/search.svg";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useMovieSearch from "../hooks/useMovieSearch";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { loading, error, searchMovies } = useMovieSearch();

  const handleGptSearchClick = async () => {
    const queryValue =
      searchText.current.value?.trim() || `popular Tollywood movies`;
      await searchMovies(queryValue);
  };
  return (
    <div className="gpt-searchbar-container">
      <form onSubmit={(e) => e.preventDefault()} className="gpt-searchbar-form">
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="gpt-searchbar-input"
        ></input>
        <div
          className="gpt-search-icon-container"
          onClick={handleGptSearchClick}
        >
          <img className="search-icon" src={search} alt="Search-Icon" />
          <button className="gpt-searchbar-search-btn">
            {lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
  );
};
export default GptSearchBar;
