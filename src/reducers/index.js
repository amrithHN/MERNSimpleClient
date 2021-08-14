import { combineReducers } from 'redux';
import myreducer from './posts';

export const allReducer = combineReducers({
    myreducer
});

export default allReducer;