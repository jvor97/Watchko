import React, {Component} from 'react';

class FullMovieButtons extends Component {

    state={
        
    }
    render(){
        return(
            <div className='FullMovieButtons' onClick={this.props.clicked}>
                <button className='btnClose'>close</button>
            </div>
        )
    }
}

export default FullMovieButtons;