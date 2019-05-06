import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import movieListData from './data/movieListData.js';


//start integrating this functionalitys

//can also pass props in here, like this:

ReactDOM.render(
    <App movies={movieListData}/>, 
    document.getElementById('app')
);



// ReactDOM.render(
//     <App />, 
//     document.getElementById('app')
// );