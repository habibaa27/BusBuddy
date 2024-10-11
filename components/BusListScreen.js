import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const BusListScreen = ({ route }) => {
  const { from, to, date, time } = route.params;

  // Sample data for available buses
  const availableBuses = [
    { id: '1', name: 'Bus 101', departure: '10:00 AM', arrival: '11:00 AM' },
    { id: '2', name: 'Bus 102', departure: '11:30 AM', arrival: '12:30 PM' },
    { id: '3', name: 'Bus 103', departure: '1:00 PM', arrival: '2:00 PM' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Buses from {from} to {to} on {date} at {time}
      </Text>
      <FlatList
        data={availableBuses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.busItem}>
            <Text style={styles.busName}>{item.name}</Text>
            <Text style={styles.busTime}>Departs: {item.departure}</Text>
            <Text style={styles.busTime}>Arrives: {item.arrival}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  busItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  busName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  busTime: {
    fontSize: 14,
    color: '#888',
  },
});
