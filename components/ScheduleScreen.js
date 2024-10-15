

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { CustomCard } from './CustomCard';

export const ScheduleScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const params = route.params;

  const DATA = [
    { id: '1', time: '10:00 AM', price: '100 RS' },
    { id: '2', time: '11:00 AM', price: '55 RS' },
    { id: '3', time: '12:00 PM', price: '60 RS' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.scheduleItem} onPress={() => nav.navigate('payment', { time: item.time })}>
      <Text style={styles.scheduleText}>{item.time}</Text>
      <Text style={styles.scheduleText}>{item.price}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Schedules</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  scheduleText: {
    fontSize: 16,
  },
});
