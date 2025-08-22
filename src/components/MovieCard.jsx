import { GET_IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-image-container">
        <img src={GET_IMG_CDN_URL(posterPath)} alt="Movie Card" />
      </div>
    </div>
  );
};
export default MovieCard;
