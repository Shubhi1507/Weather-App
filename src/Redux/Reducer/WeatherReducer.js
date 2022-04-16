import {ACTION_TYPES} from '../Actions/ActionTypes';

const InitialState = {
  weatherData: null,
};

function WeatherReducer(state = InitialState, actions) {
  switch (actions.type) {
    case ACTION_TYPES.UPDATE_WEATHER:
      return {
        ...state,
        weatherData: actions.payload
      };

    default:
      return state;
  }
}
export default WeatherReducer;
