import * as types from "../constants/movieConstants";

const initialState = {
    movieFilter: '',
    movies: []
}

export default function moviesReducer(state = initialState, action) {
    const data = action.res;
    switch(action.type){
        case types.GET_MOVIES_SUCCESS:
            return {
                ...state, ...data, movies: data.results
            }
        case types.SEARCH_MOVIE_SUCCESS:
            return {
                ...state, ...data, movies: data.results
            }
        default:
            return state;
    }
}