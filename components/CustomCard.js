import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export const CustomCard = ({ elevated, style, children }) => {
  return (
    <View style={[elevated && styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#BEBEBE',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
