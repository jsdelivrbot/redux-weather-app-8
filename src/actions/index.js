// Modules
import axios from 'axios';

// Data
import keys from '../../api-keys';
import {
    FETCH_WEATHER
} from './types';

const API_KEY = keys.openWeatherKey;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

/**
 * Action to fetch 5 day forecast from openweather API.
 * Docs ~ http://openweathermap.org/forecast5
 * 
 * @param {String} city ~ Canadian city to search for.
 * 
 * @returns {Object}
 */
export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},ca`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};
