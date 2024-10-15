

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SideMenu = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    { icon: 'car-outline', label: 'City', highlighted: true },
    { icon: 'time-outline', label: 'Request history' },
    { icon: 'bus-outline', label: 'Freight' },
    { icon: 'shield-outline', label: 'Safety' },
    { icon: 'settings-outline', label: 'Settings' },
    { icon: 'information-circle-outline', label: 'FAQ' },
    { icon: 'chatbubble-outline', label: 'Support' },
  ];

  return (
    <View style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
      {/* Toggle Button for Side Menu */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(true)} // Open the menu
      >
        <Ionicons name="menu-outline" size={30} color="white" />
      </TouchableOpacity>

      {/* Side Menu Modal */}
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setMenuVisible(false)} // Close on request
      >
        <SafeAreaView style={styles.menuModal}>
          {/* Profile Section */}
          <View style={styles.profileContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>U</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>User Name</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingStars}>★★★★★</Text>
                <Text style={styles.ratingScore}>4.78 (57)</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.menuItem, item.highlighted && styles.highlightedMenuItem]}
              >
                <Ionicons name={item.icon} size={24} color="white" />
                <Text style={styles.menuText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Footer Section */}
          <View style={styles.footerContainer}>
            {/* Driver Mode Button */}
            <TouchableOpacity style={styles.driverModeButton}>
              <Text style={styles.driverModeText}>Driver mode</Text>
            </TouchableOpacity>

            {/* Social Media Icons */}
            <View style={styles.socialIconsContainer}>
              <Ionicons name="logo-facebook" size={30} color="white" />
              <Ionicons name="logo-instagram" size={30} color="white" />
            </View>
          </View>

          {/* Close Menu Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setMenuVisible(false)} // Close the menu
          >
            <Ionicons name="close-outline" size={30} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      {/* Rest of the App content */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: '#CC2500',
    padding: 5,
    borderRadius: 5,
  },
  menuModal: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#3d3d3d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingStars: {
    color: 'yellow',
    marginRight: 5,
  },
  ratingScore: {
    color: 'white',
    fontSize: 14,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  highlightedMenuItem: {
    backgroundColor: '#303030',
  },
  menuText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 16,
  },
  footerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1e1e1e',
  },
  driverModeButton: {
    backgroundColor: '#CC2500',
    width: '30%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  driverModeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: '30%',
    justifyContent: 'space-between',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
});

export default SideMenu;
