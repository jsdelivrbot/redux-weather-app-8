// Modules
import { combineReducers } from 'redux';

// Reducers
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
