import {
  View,
  Text,
  TextInput,
  Pressable,
  onPress,
  StyleSheet,
} from 'react-native';

import store from '../../store';

const ShowWeather = () => {
  // Get the weather data from the store
  const weather = store.getState().weather;
  console.log(`the weather is ${weather.city} ${weather.country} ${weather.temp} ${weather.description} ${weather.icon}`);

  if (!weather) return null;

  // If there is weather data, return the data
  if (weather) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Today</Text>
        <Text style={styles.text}>
          {store.getState().weather.temp} degrees and {store.getState().weather.description}
        </Text>
      </View>
    );
  }
};

export default ShowWeather;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  text: {
    width: 341,
    height: 34,
    left: 18,
    top: 80,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 38,
    color: '#000000',
  },
});
