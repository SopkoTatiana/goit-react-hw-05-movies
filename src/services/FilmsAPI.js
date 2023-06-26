const BASE_URL = 'https://api.themoviedb.org/3';

const filmsAPI = ({ option, query, movieId }) => {
  let settings = '';

  switch (option) {
    case 'trending':
      settings = '/trending/movie/day?language=en-US';
      break;

    case 'search':
      settings = `/search/movie?query=${query}&include_adult=false&language=en-US&page=1}`;
      break;

    case 'details':
      settings = `/movie/${movieId}?language=en-US`;
      break;

    case 'credits':
      settings = `/movie/${movieId}/credits?language=en-US'`;
      break;

    case 'reviews':
      settings = `/movie/${movieId}/reviews?language=en-US&page=1`;
      break;

    default:
      break;
  }

  const url = `${BASE_URL}${settings}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjEyZGNiMzk2ZWM0MDM0YjEzOWIyOTk2ZjcyM2FjYSIsInN1YiI6IjY0OTQxNTc0OWEzNThkMDEzOWRmZTgwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRJF1phx7o06ze2qnNIw6OSzkiwP4UyBKbomULr0J58',
    },
  };

  return fetch(url, options).then(res => res.json());
};

export default filmsAPI;
