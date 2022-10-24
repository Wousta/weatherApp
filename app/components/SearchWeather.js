import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  onPress,
  StyleSheet,
} from 'react-native';
import { useDispatch, getState } from 'react-redux';

import { checkWeather } from '../slices/weatherSlice';

const SearchWeather = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleSumbit(){
    console.log(text);
    const payload = text.split(', ');
    dispatch(checkWeather(payload));
    setText('');
    
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
    </View>
  );
};

export default SearchWeather;

const styles = StyleSheet.create({
  container: {
    margin: 15,
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
});
