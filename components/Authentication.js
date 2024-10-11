


// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useTheme } from './ThemeContext';

// export const LoginScreen = () => {
//   const navigation = useNavigation();
//   const { colors } = useTheme(); // Access theme colors

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       <Text style={[styles.title, { color: colors.text }]}>BusBuddy</Text>

      


//       <Text style={[styles.title, { color: colors.text }]}>Login</Text>
//       <TextInput
//         placeholder="Email"
//         placeholderTextColor={colors.text}
//         style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
//       />
//       <TextInput
//         placeholder="Password"
//         placeholderTextColor={colors.text}
//         secureTextEntry
//         style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
//       />
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: '#6BC5E8' }]} // Keep original button color
//         onPress={() => navigation.navigate('home')}
//       >
//         <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text> {/* Keep text white */}
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('signup')}>
//         <Text style={[styles.link, { color: colors.text }]}>Don't have an account? Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export const SignupScreen = () => {
//   const navigation = useNavigation();
//   const { colors } = useTheme(); // Access theme colors

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       <Text style={[styles.title, { color: colors.text }]}>Sign Up</Text>
//       <TextInput
//         placeholder="Email"
//         placeholderTextColor={colors.text}
//         style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
//       />
//       <TextInput
//         placeholder="Password"
//         placeholderTextColor={colors.text}
//         secureTextEntry
//         style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
//       />
//       <TextInput
//         placeholder="Confirm Password"
//         placeholderTextColor={colors.text}
//         secureTextEntry
//         style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
//       />
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: '#6BC5E8' }]} // Keep original button color
//         onPress={() => navigation.navigate('home')}
//       >
//         <Text style={[styles.buttonText, { color: '#fff' }]}>Sign Up</Text> {/* Keep text white */}
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('login')}>
//         <Text style={[styles.link, { color: colors.text }]}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#81B0FF'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
    
//   },
//   input: {
//     width: '40%',
//     padding: 10,
//     borderWidth: 3,
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   button: {
//     padding: 15,
//     borderRadius: 5,
//     width: '40%',
//     alignItems: 'center',
    
//   },
//   buttonText: {
//     fontWeight: 'bold',
//   },
//   link: {
//     marginTop: 15,
//     textDecorationLine: 'underline',
    
//   },


 
// });



// //new

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeContext';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme(); // Access theme colors

  // State to manage the hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>BusBuddy</Text>

      <Text style={[styles.title, { color: colors.text }]}>Login</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={colors.text}
        style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.text}
        secureTextEntry
        style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]} // Change button color to red
        onPress={() => navigation.navigate('home')}
      >
        <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text> {/* Keep text white */}
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('signup')}
        onPressIn={() => setIsHovered(true)} // Set hover state to true on press in
        onPressOut={() => setIsHovered(false)} // Reset hover state on press out
      >
        <Text style={[styles.link, { color: isHovered ? 'red' : colors.text }]}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const SignupScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme(); // Access theme colors

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={colors.text}
        style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.text}
        secureTextEntry
        style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor={colors.text}
        secureTextEntry
        style={[styles.input, { borderColor: colors.cardBackground, color: colors.text }]}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#6BC5E8' }]} // Keep original button color
        onPress={() => navigation.navigate('home')}
      >
        <Text style={[styles.buttonText, { color: '#fff' }]}>Sign Up</Text> {/* Keep text white */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={[styles.link, { color: colors.text }]}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#81B0FF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '40%',
    padding: 10,
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
