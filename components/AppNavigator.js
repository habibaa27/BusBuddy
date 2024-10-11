


// // components/AppNavigator.js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen.js';
import { ScheduleScreen } from './ScheduleScreen.js';
import { PaymentScreen } from './PaymentScreen.js';
import { LoginScreen, SignupScreen } from './Authentication.js';
import { BusListScreen } from './BusListScreen';
import BookingScreen from './BookingScreen';
// Import your authentication screens

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="schedule" component={ScheduleScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
      <Stack.Screen name="busList" component={BusListScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      
    </Stack.Navigator>
  );
};






//new

// components/AppNavigator.js
// import * as React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { HomeScreen } from './HomeScreen.js';
// import { ScheduleScreen } from './ScheduleScreen.js';
// import { PaymentScreen } from './PaymentScreen.js';
// import { LoginScreen, SignupScreen } from './Authentication.js'; // Import your authentication screens
// import { SplashScreen } from './SplashScreen'; // New Splash Screen

// const Stack = createStackNavigator();

// export const AppNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="splash" component={SplashScreen} />
//       <Stack.Screen name="login" component={LoginScreen} />
//       <Stack.Screen name="signup" component={SignupScreen} />
//       <Stack.Screen name="home" component={HomeScreen} />
//       <Stack.Screen name="schedule" component={ScheduleScreen} />
//       <Stack.Screen name="payment" component={PaymentScreen} />
//     </Stack.Navigator>
//   );
// };
