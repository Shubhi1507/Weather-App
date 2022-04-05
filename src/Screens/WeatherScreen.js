import React from 'react';
import {View, Text, PermissionsAndroid, TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';


export default function WeatherScreen() {
  async function GetMyLocation() {
    try {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);

          CallWeatherAPI(position.coords.latitude, position.coords.longitude);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (err) {
      console.warn(err);
    }
  }

  async function CallWeatherAPI() {
      
    try {
    } catch (error) {}
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
