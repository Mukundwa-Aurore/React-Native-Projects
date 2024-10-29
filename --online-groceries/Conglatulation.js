import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Conglatulation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Congratulations! Your order has been placed.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Conglatulation;
