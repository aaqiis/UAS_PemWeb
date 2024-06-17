import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import ItemList from './src/ItemList';

const App = () => {
  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF69B4',
  },
});

export default App;