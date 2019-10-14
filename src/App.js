import React from 'react';
import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom'
import MovieDB from './containers/MovieDB/MovieDB';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <button type="button" className="btn btn-primary">Primary</button>
      <MovieDB/>
    </div>
    </BrowserRouter>
  );
}

export default App;
