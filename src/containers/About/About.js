import React, {Component} from 'react';
// import {connect} from 'react-redux';
import './About.css';

class About extends Component {
    render () {
        console.log(this.props.display);

        // let about;
        // if (this.props.display) {
        //     about = (
        //     <div className='aboutText'>
        //         'Looking for a movie to watch tonight ? You are on the right place !
        //         Choose your movie, read the info and then just enjoy your unlimited 
        //         movie ..'
        //     </div>)
        // }

        return(
            <section className='About'>
              <div className='aboutText'>
                'Looking for a movie to watch tonight ? You are on the right place !
                Choose your movie, read the info and then just enjoy your unlimited 
                movie ..'
            </div>
            </section>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//     display: state.displayEl.displayAbout
//     }
// }

export default About;