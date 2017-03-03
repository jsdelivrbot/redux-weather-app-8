// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Chart from '../components/Chart';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.renderWeather = this.renderWeather.bind(this);
    }

    /**
     * Convert Kelvin temperature to celsius for weather average display
     * 
     * @param {Number} kelvinTemp ~ Temperature in (K)elvin units.
     */
    kelvinToCelsius(kelvinTemp) {
        return kelvinTemp - 273.15;
    }

    /**
     * Render the dashboard for the temp/pressure/humidity using 'Sparklines' component.
     * 
     * @param {Array} city ~ City to render data for.
     * @param {Array} list ~ List of response data.
     */
    renderWeather({ city, list }) {
        const name = city.name;
        const temperatures = list.map(weather => this.kelvinToCelsius(weather.main.temp));
        const pressures = list.map(weather => this.kelvinToCelsius(weather.main.pressure));
        const humidities = list.map(weather => this.kelvinToCelsius(weather.main.humidity));

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temperatures} color="blue" /></td>
                <td><Chart data={pressures} color="purple" /></td>
                <td><Chart data={humidities} color="teal" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather }) => {
    return { weather };
};

export default connect(mapStateToProps)(WeatherList);
