import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MovieDB from './containers/MovieDB/MovieDB';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MovieDB/>
    </div>
    </BrowserRouter>
  );
}

export default App;
