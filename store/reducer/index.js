import { combineReducers } from 'redux';
import user from "./userReducer";
import jobs from './jobReducer'

 

const rootReducer = combineReducers({
    user,
    jobs
});

export default rootReducer;