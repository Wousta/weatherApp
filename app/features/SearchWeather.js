import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  onPress,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getWeather, showWeather} from 'react-native-weather-api';

import {checkWeather} from '../slices/weatherSlice';
import store from '../../store';

//https://openweathermap.org/ - API key
const weatherAPIKey = '72576a874b6d2e544c95528c755cbbe4';

const SearchWeather = () => {
  //Text is the input from the user, result is the weather info message
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const dispatch = useDispatch();

  function handleSumbit() {
    const payload = text.split(',');
    if(payload.length != 2){
      setResult('An error has happened');
      return;
    }
    getWeather({
      key: weatherAPIKey,
      city: payload[0],
      country: payload[1],
    }).then(() => {
      const data = new showWeather();
      dispatch(
        checkWeather({
          city: payload[0],
          country: payload[1],
          temp: Math.round(data.temp - 273.15),
          description: data.description,
          icon: data.icon,
        }),
      );
    }).then(() => {
      setResult(`${store.getState().weather.temp} degrees and ${store.getState().weather.description}`);
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="e.g.: Lausanne, Switzerland"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={handleSumbit}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

const checkInput = (text) => {
  if(text.split(',').length != 2){
    console.log('Invalid input');
    return(
      <Text style={styles.text}>An error has happened</Text>
    );
  }
};

export default SearchWeather;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    top: 151,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9FA5AA',
    borderStyle: 'solid',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    marginBottom: 8,
    padding: 8,
    height: 47,
  },
  button: {
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundColor: '#4CAF50',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    height: 48,
    top: 350,
  },
  buttonText: {
    height: 19,
    left: '42.15%',
    right: '43.31%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  text: {
    width: 341,
    height: 34,
    left: 18,
    top: 100,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 38,
    color: '#000000',
  },
});
