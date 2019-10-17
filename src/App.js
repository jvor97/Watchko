import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MovieDB from './containers/MovieDB/MovieDB';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <MovieDB/>
    </div>
    </BrowserRouter>
  );
}

export default App;
