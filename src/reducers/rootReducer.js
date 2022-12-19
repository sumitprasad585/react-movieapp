import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import moviesReducer from './movieReducer';

const rootReducer = combineReducers({
    authReducer,
    modalReducer,
    moviesReducer    
})

export default rootReducer;
