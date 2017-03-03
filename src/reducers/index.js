// Modules
import { combineReducers } from 'redux';

// Reducers
import WeatherReducer from './WeatherReducer';

// Setup the redux global state
const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
