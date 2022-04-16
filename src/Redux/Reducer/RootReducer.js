import { combineReducers } from "redux";
import WeatherReducer from "./WeatherReducer";

const RootReducer = combineReducers({
 WeatherReducer : WeatherReducer


});

export default RootReducer;