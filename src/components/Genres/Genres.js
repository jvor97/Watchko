import React, { Component } from "react";
import Collapse from "react-bootstrap/Collapse";
import axios from "axios";
import { connect } from "react-redux";

class Genres extends Component {
  render() {
    // function Example() {
    //     const [open, setOpen] = useState(false);

    let genres = [];
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=65777f92529c3462f958232f137b357f&language=en-US"
      )
      .then(response => {
        genres.push(response.data);
      });

    return (
      <>
        {/* <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button> */}
        <Collapse in={this.props.open}>
          <div id="example-collapse-text">
            <ul>
              {genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
        </Collapse>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.displayEl.openGenres
  };
};

export default connect(mapStateToProps)(Genres);
