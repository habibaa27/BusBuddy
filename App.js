import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AppNavigator} from './components/AppNavigator';
import { ThemeProvider } from './components/ThemeContext';
import SideMenu from './components/SideMenu';

export default function App() {
   return (
    <ThemeProvider>
      <NavigationContainer>
       <SideMenu/>
          <AppNavigator />
          
     </NavigationContainer>
     
     </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
