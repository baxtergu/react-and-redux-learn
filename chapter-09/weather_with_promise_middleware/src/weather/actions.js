import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const fetchWeather = (cityCode) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    return {
        promise: fetch(apiUrl).then(response => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            return response.json().then(responseJson => responseJson.weatherinfo)

        }),
        types: [FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE]
    };
};