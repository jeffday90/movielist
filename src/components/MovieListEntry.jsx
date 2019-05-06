import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {isWatched: false}
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
  handleSubmit(event) {
    this.props.movie.watched = !this.props.movie.watched;
    this.setState({isWatched: !this.state.isWatched});
    event.preventDefault();
  }
    
    
  render (){
    if (!this.props.movie.watched){
      var buttonChange = {backgroundColor: 'grey'}
    } else {var buttonChange = {backgroundColor: 'yellow'}};

        var buttonStyles = {
            display: 'inlineBlock',
            fontStyle: 'italic',
            fontSize: '18px',
        };

        return (
            <div style={movieEntryStyle}>{this.props.movie.title}
                <div><img src={`http://image.tmdb.org/t/p/w200/${this.props.movie.image}`} alt="Movie Title"></img></div>
                <div style={eleTitle}>Overview:</div>
                <div style={overviewStyle}>{this.props.movie.overview}</div>
                <div style={eleTitle}>Release Date:</div>
                <div style={releaseStyle}>{this.props.movie.releaseDate}</div>
                <div>
                    <button onClick={this.handleSubmit} style={Object.assign({}, 
                        buttonStyles, buttonChange)}>{this.props.movie.watched === true ? `Watched` : `To Watch`} </button>
                </div>
            </div>
        )
    }
}
<img src="pic_trulli.jpg" alt="Italian Trulli"></img>

var movieEntryStyle = {
    borderStyle: 'outset',
    margin: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
    fontSize: '30px'
};

var overviewStyle = {
    fontSize: '12px',
    borderStyle: 'solid'
}

var releaseStyle = {
    fontSize: '12px'
}

 var eleTitle = {
     fontSize: '18px'
 }




export default MovieListEntry;

//TODO: 
  //change the 