import React from 'react';

class Add extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  handleSubmit(event){
    //this.props.addMovieFromDB;
    this.props.addMovie(this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form style={formStyle} onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Add Movie"/>
      </form>
    )
  }
}

var formStyle = {
  textAlign: 'center'
}

export default Add;