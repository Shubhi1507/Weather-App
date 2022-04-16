import React from 'react';
import {View, Text, PermissionsAndroid, TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';
import {CONSTANTS} from '../Components/Utils';
import {ACTION_TYPES} from '../Redux/Actions/ActionTypes';

export default function WeatherScreen() {
  let dispatch = useDispatch();
  async function GetMyLocation() {
    try {
      Geolocation.getCurrentPosition(
        position => {
          CallWeatherAPI(position.coords.latitude, position.coords.longitude);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function CallWeatherAPI(latitude, longitude) {
    console.log(latitude, longitude);

    let TempURL =
      CONSTANTS.API_URL +
      'lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&appid=' +
      CONSTANTS.API_KEY;
    console.log(TempURL);
    try {
      const data = await fetch(TempURL);
      let jsonResponse = await data.json();
      dispatch({type: ACTION_TYPES.UPDATE_WEATHER, payload: jsonResponse});
      console.log(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text></Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'orange',
          borderRadius: 10,
          borderColor: 'black',
          borderWidth: 1,
        }}
        onPress={() => {
          GetMyLocation();
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          Get Location
        </Text>
      </TouchableOpacity>
    </View>
  );
}
