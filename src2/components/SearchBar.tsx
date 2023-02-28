import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View>
      <TextInput
        placeholder="...ara"
        placeholderTextColor={'black'}
        style={styles.text}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
   backgroundColor:'#000a',
  },
});