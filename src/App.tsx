import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import MovieList from './features/movies/MovieList';

function App() {

  return (
      <div className="App">
        <MovieList/>
    </div>
  );
}

export default App;