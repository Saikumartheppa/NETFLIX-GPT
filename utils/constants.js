export const TITLE_BAR_ICON =
  "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico";

export const NETFLIX_BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg";

export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_ICON =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_TMBD_KEY}`,
  },
};
export const TMBD_BASE_URL = "https://api.themoviedb.org/";

export const NOW_PLAYING_MOVIES_API = `${TMBD_BASE_URL}3/movie/now_playing?page=1`;

export const GET_MOVIE_VIDEO_URL = (movieId) =>
  `${TMBD_BASE_URL}3/movie/${movieId}/videos`;

export const GET_YOUTUBE_TRAILER_VIDEO = (trailerKey) =>
  `https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&rel=0&playlist=${trailerKey}`;

export const GET_IMG_CDN_URL = (posterPath) =>
  `https://image.tmdb.org/t/p/original${posterPath}`;

export const POPULAR_MOVIES_API = `${TMBD_BASE_URL}3/movie/popular?page=1`;

export const TOP_RATED_MOVIES_API = `${TMBD_BASE_URL}3/movie/top_rated?page=1`;

export const UPCOMING_MOVIES_API = `${TMBD_BASE_URL}3/movie/upcoming?page=1`;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "spanish", name: "Spanish" },
];
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;;

export const SEARCH_MOVIE_API = (movieName) =>
`${TMBD_BASE_URL}3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;

