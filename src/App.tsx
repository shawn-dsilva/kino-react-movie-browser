import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import MovieList from './features/movies/MovieList';
import Navbar from './features/movies/Navbar';


function App() {

  return (
      <div className="App">
        <Navbar/>
        <MovieList/>
    </div>
  );
}

export default App;