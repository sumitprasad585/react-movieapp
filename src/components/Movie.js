import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        const { title, overview } = this.props;
        return (
            <div className="Movie">
                { title }
            </div>
        )
    }
}

export default Movie;