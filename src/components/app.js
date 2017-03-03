// Modules
import React, { Component } from 'react';

// Components
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Canadian Weather Dashboard App
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}

export default App;
