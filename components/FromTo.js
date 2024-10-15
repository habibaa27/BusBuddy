

import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const FromTo = ({ fromLocation = "Location A", toLocation = "Location B" }) => {
  return (
    <View style={{ width: "100%", paddingVertical: 10 }}>
      <LocationItem location={fromLocation} label="From" iconColor="#6BC5E8" />
      <LocationItem location={toLocation} label="To" iconColor="#5C7A82" />
    </View>
  );
};

const LocationItem = ({ location, label, iconColor }) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
    <Ionicons name="location-sharp" size={26} color={iconColor} />
    <View style={{ marginLeft: 20 }}>
      <Text style={{ opacity: 0.6, fontSize: 15 }}>{label}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>{location}</Text>
    </View>
  </View>
);



