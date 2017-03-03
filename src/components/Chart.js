import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

/**
 * Finds the average temperature for the current city.
 * 
 * @param {array} data 
 */
const average = (data) => {
    return _.round(
        _.sum(data) / data.length
    );
};

/**
 * Custom chart component based off of the Sparklines npm package.
 * docs ~ https://github.com/borisyankov/react-sparklines
 * 
 * @param {Object} props ~ Chart component props passed from WeatherList.js
 */
const Chart = (props) => {
    return (
        <div style={{ flex: 1 }}>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>

            <div>{average(props.data)}</div>
        </div>
    );
};

export default Chart;
