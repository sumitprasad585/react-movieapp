import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movieActions';
import Movie from './Movie';
import './Movies.css';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            movieFiler: ''
        }
    }

    componentDidMount() {
        const { dispatch, match } = this.props;
        const movieFilter = match.path;
        dispatch(getMovies(movieFilter));
    }

    render() {
        const { moviesReducer: {movies} } = this.props;
        return (
            <div className="Movies">
                {movies.length === 0 ? <h1>No movies found</h1>: 
                    movies.map(current => {
                        return <Movie key={current.id} {...current} />
                    })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAuth: state.authReducer,
        moviesReducer: state.moviesReducer
    }
}

export default connect(mapStateToProps)(Movies);