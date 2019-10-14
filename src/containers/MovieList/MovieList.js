import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Movie from '../../components/Movie/Movie';
import FullMovie from '../FullMovie/FullMovie';

class MovieList extends Component {

    state = {
        movies : [],
        error : ''
    }

    componentDidMount(){
        
    //     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dk').then(response => 
    //         {
    //             this.setState({
    //                 movies: response.data
    //             })
    //         }).catch(error => this.setState({ error : error}));
    // }
    console.log(this.props);
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=65777f92529c3462f958232f137b357f&language=en-US&page=1&fbclid=IwAR3WdGpp9ZHMyGn4Vyni4MFF0hpc-Kfvyyj9PLnyueheoQ0o3YIPcmSL5Dkhttps://jsonplaceholder.typicode.com/posts').then(response => {
        // const posts = response.data.slice(1,10)
        this.setState({movies : response.data})
    }).catch(error => {this.setState({error : error})})
     }

     fullPosthandler = (id) =>{
        this.props.history.push('/' + id);
     }

    render(){
        let movies = <p>Something went wrong</p>;
        if (!this.state.error) {
            if (this.state.movies.results) {
                movies = this.state.movies.results.map(movie => {return (
                    <Movie title={movie.title} img={movie.poster_path} key={movie.id} clicked={() => this.fullPosthandler(movie.id)}></Movie>
                )})
            }
        }
        

        console.log(this.state.movies);
        return(
           
            <div>
                
                {movies}
                 <Route path='/:id' component={FullMovie}></Route>
            </div>
        )
    }
}

export default MovieList;