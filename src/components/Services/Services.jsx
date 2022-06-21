import axios from "axios";
const API_KEY = '748a876d129f7e921766cb9e00600a21';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByName = async (movieName, page) => {
    const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&language=en&query=${movieName}`,
  );
const searchMoviesData = await response.data.results;
//   if (popularMoviesData.results.length === 0) {
//     // throw new Error(failure());
//     // throw new Error(`Not found ${searchQuery}`);
//   }
  return searchMoviesData;
}

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const trandingMoviesData = await response.data.results;
  return trandingMoviesData;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchActorsDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  const actorsDetails = await response.data;
  return actorsDetails;
};

export const fetchReviewDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
  const reviewDetails = await response.data;
  return reviewDetails;
};