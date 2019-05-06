import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import addMovieFromDB from '../addFromDB.jsx';

//TODO:
    //clear submission field upon submit (both search and add)
    
    //right now when you click on watched and then click to watched it doesn't work
        //need to integrate some system where you can work on each button press separately
    
        //there is also a bug with repeated clicks on display watched and to watch 
    //movies multiple times where we lose the whole /field list of movies
            //maybe a logic fix => keep the total array unchanged and play with
            //more state arrays

    //connect to imdb api

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        query: '',
        currMovies: [],
        totalMovies: [],
        watchedMovies: [],
        notWatchedMovies: []
    }
    this.searchFunc = this.searchFunc.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.displayTotalList = this.displayTotalList.bind(this);
    this.displayWatchedList = this.displayWatchedList.bind(this);
    this.displayToWatchList = this.displayToWatchList.bind(this);
  }

  searchFunc(query){
    this.setState({
        query: query
    }, () => this.filterList(this.state.query));
  }

  filterList(query){
    var oldMovieList = this.state.currMovies;
    var filteredMovieList = [];
    
    for (var i = 0; i < oldMovieList.length; i++){
      if (oldMovieList[i].title.includes(query)){
        filteredMovieList.push(oldMovieList[i]);
      } 
    }
    this.setState({currMovies: filteredMovieList, totalMovies: oldMovieList});
    
  }

  addMovie(addMovie){
    if (addMovie === ''){return;}

    if (this.state.currMovies.length >= 1){
      for (var i = 0 ; i < this.state.currMovies.length; i++){
        if (this.state.currMovies[i].title === addMovie) {
          return;
        }
      }
    }
    //console.log(addMovie)
    
    //call addFromDb here: 

    //addFromDB(addMovie, (data) => //need to create the 
    //object in here, since there is access to the data)

    //this call is just routing to fight club lol, need to figure out why 
    addMovieFromDB(addMovie, (data) => {
        //this doesn't work need to figure out something else

        console.log(data);
        var newMovie = {
          title: data.results[0].title,
          releaseDate: data.results[0].release_date,
          overview: data.results[0].overview,
          image: data.results[0].poster_path,
          watched: false
        }
        console.log(newMovie)
        var newMovieList = this.state.currMovies.slice();
        newMovieList.unshift(newMovie);
        this.setState({currMovies: newMovieList});

        //console.log('this is newmovie inside callback:', newMovie);
    });


    // var newMovie = {
    //   title: addMovie,
    //   watched: false
    // }

    // console.log(newMovie);

    // var newMovieList = this.state.currMovies.slice();
    // newMovieList.unshift(newMovie);
    // this.setState({currMovies: newMovieList});
  }

  displayTotalList(event){
    if (!this.state.totalMovies.length){return;};

    var displayAllMoviesArr = [];
    for (var i = 0; i < this.state.totalMovies.length; i++){
        displayAllMoviesArr.push(this.state.totalMovies[i]);
    }
    this.setState({currMovies: displayAllMoviesArr, totalMovieList: []});
  }

  displayWatchedList(){
    var oldMovieList = this.state.currMovies;
    var watchedMovies = [];
    
    for (var i = 0; i < oldMovieList.length; i++){
      if (oldMovieList[i].watched === true){
        watchedMovies.push(oldMovieList[i]);
      } 
    }

    if (!watchedMovies.length){return;};
    this.setState({currMovies: watchedMovies, totalMovies: oldMovieList});
  }

  displayToWatchList(){
    var oldMovieList = this.state.currMovies;
    var toWatchMovies = [];

    for (var i = 0; i < oldMovieList.length; i++){
      if (oldMovieList[i].watched === false){
        toWatchMovies.push(oldMovieList[i]);
      } 
    }

    if (!toWatchMovies.length){
        return;
    };

    this.setState({currMovies: toWatchMovies, totalMovies: oldMovieList});
  }
  

  render(){
    return (
      <div>
        <h1 style={titleStyles}>MovieList</h1>
          <Search searchFunc={this.searchFunc}/>
          <Add addMovie={this.addMovie}/>
            <div style={fullButtonStyle}>
                <div style={buttonStyle}>
                    <button onClick={this.displayTotalList}>
                        Display Total List
                    </button>
                </div>
                <div style={buttonStyle}>
                    <button onClick={this.displayToWatchList}>
                        Display Movies to Watch
                    </button>
                </div>
                <div style={watchedButtonStyle}>
                    <button onClick={this.displayWatchedList}>
                        Display Watched Movie List
                    </button>
                </div>
           </div>
          <MovieList movies={this.state.currMovies}/> 
      </div>
      )
  }
}



var titleStyles = {
    textAlign: 'center',
    fontFamily: 'papyrus',
    paddingTop: '20px'
};

var buttonStyle = {
    display: 'inline',
};

var fullButtonStyle = {
    textAlign: 'center'
}

var watchedButtonStyle = {
    backgroundColor: 'yellow',
    display: 'inline'
};

export default App;


      //constructor
    //this is where the state of this component lives
    //as well as where we inherit props
    //best practice to put function binding here
  
    //lifecycle method(s)
    //component did mount => start, with the DOM
    //component will unmount => end the DOM
  //methods
    //event handlers
    //submission etc etc etc
    //manipulate this.class state
  //render
    //this is what react will insert into the DOM whereever we place
    //this component
        //comprised primarily of HTML and react components
  
  //state!!
    //the way an app works and looks is derived from the state

    //first thing
        //EXPORT AND IMPORT IMMEDIATELY!!!!!!!


    //general function binding
    //event handlers as well
      //lifecycle methods

  //methods

  //JSX inserts javascript into html with {}