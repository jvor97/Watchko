import React, { Component } from "react";
import Collapse from "react-bootstrap/Collapse";
import axios from "axios";
import { connect } from "react-redux";
import "./Genres.css";
import * as actionCreators from "../../store/actions/actions";

class Genres extends Component {
  componentDidMount() {
    console.log(this.props.genres);
    this.props.onMount();
  }

  render() {
    // function Example() {
    //     const [open, setOpen] = useState(false);

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
                {this.props.genres.map(genre => {
                  return (
                    <li key={genre.id} className="genre">
                      {genre.name}
                    </li>
                  );
                })}
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
    open: state.displayEl.openGenres,
    genres: state.api.genres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch(actionCreators.loadGenres())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres);
