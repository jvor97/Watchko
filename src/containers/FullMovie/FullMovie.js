import React, {Component} from 'react';

import FullMovieButtons from '../../components/FullMovieButtons/FullMovieButtons';

class FullMovie extends Component {

    state={
        title: '',
        originalTitle: '',
        genres: '',
        release_date: '',
        runtime: '',
        overview: ''
    }

    render(){
        return(
            <div className='card bg-dark'>
            <img className="card-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/HeathJoker.png/220px-HeathJoker.png" alt="Card image"/>
                <div className="card-img-overlay">
                <h1 className='card-title'>This is title</h1>
                <h3>genres</h3>
                <div className="card-text">
                    <p>release_date</p>
                    <p>runtime</p>
                </div>
                <div className="card-text">
                    overview
                </div>
                </div>
                <FullMovieButtons/>
            </div>
            
        )
    }
}

export default FullMovie;