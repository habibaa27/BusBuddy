

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

// Dummy Bus Routes Data
const DATA = [
  {
    id: 1,
    name: 'Bus 1',
    backgroundColor: '#6BC5E8',
    imagesrc: bus,
    onPressHandler: (nav) => {
      nav.navigate('schedule', { title: 'Bus 1', imagesrc: bus, backgroundColor: '#6BC5E8' });
    },
  },
  {
    id: 2,
    name: 'Bus 2',
    backgroundColor: '#3A9EC2',
    imagesrc: mrt,
    onPressHandler: (nav) => {
      nav.navigate('schedule', { title: 'Bus 2', imagesrc: mrt, backgroundColor: '#3A9EC2' });
    },
  },
];

export const HomeScreen = () => {
  const nav = useNavigation();
  const { colors, toggleTheme } = useTheme(); // Access theme colors and the toggle function

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Welcome to ShuttleBuddy</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Ionicons name="md-moon" size={28} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="md-search" size={22} color={colors.text} />
        <TextInput
          style={[styles.searchInput, { color: colors.text, borderColor: colors.border }]}
          placeholder="Search for shuttles, routes, or stops..."
          placeholderTextColor={colors.placeholder}
        />
      </View>

      {/* Transportation Options Section */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Available Bus Routes</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.backgroundColor }]}
            onPress={() => item.onPressHandler(nav)}
          >
            <Image source={item.imagesrc} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>Tap to view schedule</Text>
            </View>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      {/* Spacer to push navigation buttons down */}
      <View style={{ flex: 1 }} />

      {/* Quick Navigation Section */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Navigation</Text>
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => nav.navigate('BookingScreen')}
        >
          <Ionicons name="md-calendar" size={26} color="red" />
          <Text style={[styles.navButtonText, { color: 'red' }]}>Book a Shuttle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => nav.navigate('BookingHistory')}
        >
          <Ionicons name="md-time" size={26} color="red" />
          <Text style={[styles.navButtonText, { color: 'red' }]}>Booking History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => nav.navigate('LiveTracking')}
        >
          <Ionicons name="md-pin" size={26} color="red" />
          <Text style={[styles.navButtonText, { color: 'red' }]}>Live Tracking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5E5E5', // Light background color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  themeToggle: {
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    elevation: 5, // Shadow effect
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  horizontalList: {
    paddingBottom: 20,
  },
  card: {
    width: 200,
    height: 150,
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Shadow effect
  },
  cardImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  cardTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#FFF',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20, // Add margin to space it from the previous section
  },
  navButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, // Space between buttons
    elevation: 3, // Shadow effect
    backgroundColor: 'transparent', // Make background transparent
  },
  navButtonText: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default HomeScreen;
