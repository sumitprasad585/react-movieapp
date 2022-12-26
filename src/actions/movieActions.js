import request from 'superagent';
import { GET_MOVIES_SUCCESS, SEARCH_MOVIE_SUCCESS } from '../constants/movieConstants';

export function getMoviesSuccess(data, movieFilter) {
    const res = {...data, movieFilter}
    return { type: GET_MOVIES_SUCCESS, res }
}

export function searchMovieSuccess(data, movieName) {
    const res = {...data, movieName};
    return { type: SEARCH_MOVIE_SUCCESS, res}
}

export function getMovies(movieFilter) {
    return (dispatch, getState) => {
        const apiKey = getState().authReducer.apiKey;
        request
            .get('https://api.themoviedb.org/3/movie' + movieFilter)
            .query({api_key: apiKey})
            .end((err, res) => {
                if(err) {
                    console.log(err);
                    return;
                }
                const data = JSON.parse(res.text);
                dispatch(getMoviesSuccess(data, movieFilter));
            })
    }
}

export default function searchMovie(movieName) {
    return (dispatch, getState) => {
        const apiKey = getState().authReducer.apiKey;
        request
            .get('https://api.themoviedb.org/3/search/movie')
            .query({api_key: apiKey})
            .query({ query: movieName})
            .end((err, res) => {
                if(err) {
                    console.log(err);
                    return;
                }
                const data = JSON.parse(res.text);
                dispatch(searchMovieSuccess(data, movieName));
            })
    }
}