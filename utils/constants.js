export const TITLE_BAR_ICON = "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico";

export const HEADER_BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg";

export const NETFLIX_LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_ICON = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const  API_OPTIONS =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzlhOTc4ZWRlZDMyYzIzMDI4MzU0N2Y4NTQ3YTk1MCIsIm5iZiI6MTc1NTQxNTcxMC4yNTEwMDAyLCJzdWIiOiI2OGExODQ5ZWJiMzNhMWYwYWY4NmZiOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BIPL_Tqwb4lMXBitnEk9tNnR_I7E4khq1u30Ey3uV-g'
  }
};

export const NOW_PLAYING_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const  GET_MOVIE_VIDEO_URL = (movieId) =>`https://api.themoviedb.org/3/movie/${movieId}/videos`;

export const GET_YOUTUBE_TRAILER_VIDEO = (trailerKey) => `https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&rel=0&playlist=${trailerKey}`;