import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MovieDB from './containers/MovieDB/MovieDB';
import Nav from './components/Nav/Nav';
import About from './containers/About/About';

class App extends Component {
  render() {
  console.log(this.props.display);
  let about;
  if (this.props.display) {
      about = <About/>
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      {about}
      <MovieDB/>
    </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps = state => {
  return {
  display: state.displayEl.displayAbout
  }
}

export default connect(mapStateToProps)(App);
