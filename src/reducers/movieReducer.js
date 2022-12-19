import { GET_MOVIES_SUCCESS } from "../constants/movieConstants";

const initialState = {
    movieFilter: '',
    movies: []
}

export default function moviesReducer(state = initialState, action) {
    const data = action.res;
    switch(action.type){
        case GET_MOVIES_SUCCESS:
            return {
                ...state, movies: data.results, ...data
            }
        default:
            return state;
    }
}