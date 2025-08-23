import search from "../assets/search.svg";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
  return (
    <div className="gpt-searchbar-container">
      <form onSubmit={(e) => e.preventDefault()} className="gpt-searchbar-form">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="gpt-searchbar-input"
        ></input>
        <div className="gpt-search-icon-container">
          <img className="search-icon" src={search} alt="Search-Icon" />
          <button className="gpt-searchbar-search-btn">{lang[langKey].search}</button>
        </div>
      </form>
    </div>
  );
};
export default GptSearchBar;
