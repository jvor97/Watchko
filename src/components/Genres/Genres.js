import React, { Component } from "react";
import Collapse from "react-bootstrap/Collapse";
import axios from "axios";
import { connect } from "react-redux";
import "./Genres.css";

class Genres extends Component {
  render() {
    // function Example() {
    //     const [open, setOpen] = useState(false);

    let genres = [];
    const loadGenres = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=65777f92529c3462f958232f137b357f&language=en-US"
        )
        .then(response => {
          genres.push(response.data);
        });
    };

    return (
      <>
        {/* <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button> */}
        <div>
          <Collapse in={this.props.open}>
            <div id="multiCollapseExample1">
              <ul>
                {
                  (loadGenres(),
                  genres.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>;
                  }))
                }
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
                <li className="bu">ifje</li>
              </ul>
            </div>
          </Collapse>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.displayEl.openGenres
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onMount: () => dispatch(() => loadGenres())
//   };
// };

export default connect(mapStateToProps)(Genres);
