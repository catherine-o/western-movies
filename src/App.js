import React from 'react';
import './App.css';

import MoviesContainer from './components/MoviesContainer'
import MovieSpec from './components/MovieSpec'

class App extends React.Component {
  state = {
    westernMovies: [{
      id: 1,
      title: "The Sons of Katie Elder",
      good: true
    }, {
      id: 2,
      title: "The Good, The Bad, and The Ugly",
      good: true
    }, {
      id: 3,
      title: "True Grit",
      good: false
    },
    {
      id: 4,
      title: "John Wayne and The Cowboys",
      good: true
    }, {
      id: 5,
      title: "Cool Hand Luke",
      good: true
    }],
    currentMovie: {}
  }

  addCurrentMovie = movie => {
    this.setState({ currentMovie: movie })
  }

  switchRating = movie => {
    const updatedMovies = this.state.westernMovies.map(m => {
      return m.id === movie.id ? { ...m, good: !m.good } : m
    })

    this.setState({
      westernMovies: updatedMovies,
      currentMovie: {}
    })

  }

  render() {
    console.log("state", this.state.westernMovies)
    return (
      <div className="App" >
        {this.state.currentMovie.id
          ? <MovieSpec movie={this.state.currentMovie} switchRating={this.switchRating} />
          : < MoviesContainer westernMovies={this.state.westernMovies} addCurrentMovie={this.addCurrentMovie} />}
      </div>
    );
  }
}

export default App;
// show page for single westernMovies
