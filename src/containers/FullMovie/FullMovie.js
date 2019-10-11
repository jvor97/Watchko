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
            <div>
                <div>
                <h1 className='title'></h1>
                <h3>genres</h3>
                <div>
                    <p>release_date</p>
                    <p>runtime</p>
                </div>
                <div>
                    overview
                </div>
                </div>
                <FullMovieButtons/>
            </div>
        )
    }
}

export default FullMovie;