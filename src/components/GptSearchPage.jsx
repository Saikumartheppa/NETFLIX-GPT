import { NETFLIX_BG_URL } from "../../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return (
        <div className="gpt-search-page-outer-container" style={{backgroundImage: `url(${NETFLIX_BG_URL})`}}>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}
export default GptSearchPage;