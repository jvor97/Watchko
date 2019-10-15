import React, {Component} from 'react';
import './WelcomePage.css';

class WelcomePage extends Component {
    render () {
        return(
            <section className='WelcomePage'>
                <div className='welcomeText'>
                    'Looking for a movie to watch tonight ? You are on the right place !
                    Choose your movie, read the info and then just enjoy your unlimited 
                    movie ..'
                </div>
            </section>
        )
    }
}

export default WelcomePage;