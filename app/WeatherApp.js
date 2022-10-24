import {View, StyleSheet, Text} from 'react-native';

import SearchWeather from './components/SearchWeather';
import ShowWeather from './components/ShowWeather';

const WeatherApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <SearchWeather />
      <ShowWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    position: 'absolute',
    width: 341,
    height: 34,
    left: 18,
    top: 80,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 38,
    color: '#000000',
  },
});

export default WeatherApp;
