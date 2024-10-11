



// import React, { createContext, useState, useContext } from 'react';
// import { useColorScheme, Text, Switch, View } from 'react-native';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     const systemScheme = useColorScheme(); // Detect system theme
//     const [isDarkMode, setIsDarkMode] = useState(systemScheme === 'dark');

//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     const theme = {
//         isDarkMode,
//         colors: isDarkMode
//             ? {
//                 background: '#000000',
//                 text: '#FFFFFF',
//                 cardBackground: '#1C1C1C',
//             }
//             : {
//                 background: '#FFFFFF',
//                 text: '#000000',
//                 cardBackground: '#F5F5F5',
//             },
//         toggleTheme,
//     };

//     return (
//         <ThemeContext.Provider value={theme}>
//             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 1 }}>
//                 <Text style={{ fontSize: 16, color: theme.colors.text }}>Dark Mode</Text>
//                 <Switch
//                     value={isDarkMode}
//                     onValueChange={toggleTheme}
//                     thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
//                     trackColor={{ false: '#767577', true: '#81b0ff' }}
//                 />
//             </View>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export const useTheme = () => useContext(ThemeContext);





//new


import React, { createContext, useState, useContext } from 'react';
import { useColorScheme, Text, Switch, View, StyleSheet, TextInput, Button } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemScheme === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    colors: isDarkMode
      ? {
          background: '#000000',
          text: '#FFFFFF',
          cardBackground: '#1C1C1C',
        }
      : {
          background: '#FFFFFF',
          text: '#000000',
          cardBackground: '#F5F5F5',
        },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {/* Root container that sets the background color */}
      <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
        {/* Header with Toggle Button */}
        <View style={styles.toggleContainer}>
          <Text style={{ fontSize: 16, color: theme.colors.text }}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        {/* Render the children components inside the themed container */}
        <View style={{ flex: 1, width: '100%' }}>
          {children}
        </View>
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Menu button at the top-left */}
      <View style={styles.menuButton}>
        <Text style={{ color: theme.colors.text }}>☰ Menu</Text>
      </View>

      {/* Login Form Example */}
      <Text style={[styles.title, { color: theme.colors.text }]}>Login</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.cardBackground, color: theme.colors.text }]}
        placeholder="Username"
        placeholderTextColor={theme.colors.text}
      />
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.cardBackground, color: theme.colors.text }]}
        placeholder="Password"
        placeholderTextColor={theme.colors.text}
        secureTextEntry
      />
      <Button title="Login" color={theme.isDarkMode ? '#81b0ff' : '#8CD205'} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
