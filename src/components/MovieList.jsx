import MovieListEntry from './MovieListEntry.jsx';
import React from 'react';

var MovieList = ({movies}) => (
    <div>
      {movies.map(movie => <MovieListEntry movie={movie} key={movies.indexOf(movie)}/>)}
    </div>
)

export default MovieList;