import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';
    }
    render() {
        const { title, poster_path, vote_average, overview } = this.props;
        return (
            <div className="Movie">
                <img src={this.IMG_BASE_URL + poster_path} alt={title} />
                <div className="Movie-brief">
                    <div className="Movie-brief-container">
                    <h1 className="Movie-title">{title}</h1>
                    <h2 className="Movie-rating">{vote_average}</h2>
                    </div>
                </div>
                <div className="Movie-overview">
                    {overview}
                </div>
            </div>
        )
    }
}

export default Movie;