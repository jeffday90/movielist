import MOVIE_API_KEY from '../config/movieAPIkey.js';
//import App from './components/app.jsx';

var addMovieFromDB = (query, callback) => {
  $.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
      //`https://api.themoviedb.org/3/search/movie/?api_key=${MOVIE_API_KEY}&language=en-US&query=${query}b&page=1&include_adult=false`, 
  (data) =>  callback(data));
}

export default addMovieFromDB;


//cefa52ee8bd824395a17aaba4895bf50