import * as actions from '../../weather/actions.js';
import * as actionTypes from '../../weather/actionTypes.js';
import * as Status from '../../weather/status.js';
import reducer from '../../weather/reducer.js';

describe('weather/reducer', () => {
  it('should return loading status', () => {
    const action = actions.fetchWeatherStarted();

    const newState = reducer({}, action);

    expect(newState.status).toBe(Status.LOADING);
  });
});
