




// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

// const BookingScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Book a Shuttle</Text>

//       {/* Icon Section */}
//       <Ionicons name="bus" size={100} color="#FF6F61" style={styles.icon} /> {/* Change the icon name as needed */}

//       {/* Input fields for booking details */}
//       <TextInput
//         style={styles.input}
//         placeholder="From"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="To"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Departure Date"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Return Date"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Number of Passengers"
//       />

//       {/* Booking button */}
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Cari</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#E5E5E5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   icon: {
//     alignSelf: 'center', // Center the icon
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
//   button: {
//     backgroundColor: '#FF6F61',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default BookingScreen;




// BookingScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookingScreen = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [numPersons, setNumPersons] = useState(1);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleConfirm = () => {
    setConfirmVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reserve Seat</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="arrow-right" size={20} />
        <TextInput
          style={styles.input}
          placeholder="From"
          value={fromLocation}
          onChangeText={setFromLocation}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="arrow-left" size={20} />
        <TextInput
          style={styles.input}
          placeholder="To"
          value={toLocation}
          onChangeText={setToLocation}
        />
      </View>

      <TouchableOpacity style={styles.input} onPress={() => showMode('date')}>
        <Text style={styles.inputText}>{date.toLocaleDateString()}</Text>
        <Icon name="calendar" size={20} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.input} onPress={() => showMode('time')}>
        <Text style={styles.inputText}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        <Icon name="clock-o" size={20} />
      </TouchableOpacity>

      <View style={styles.personsContainer}>
        <Text style={styles.personsText}>Number of Persons:</Text>
        <TextInput
          style={styles.personsInput}
          value={String(numPersons)}
          keyboardType="numeric"
          onChangeText={setNumPersons}
        />
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Modal visible={confirmVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Booking Confirmed!</Text>
          <Button title="Close" onPress={() => setConfirmVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5E5E5',
  },
  header: {
    backgroundColor: '#CC2500',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  inputText: {
    fontSize: 16,
  },
  personsContainer: {
    marginBottom: 15,
  },
  personsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  personsInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#CC2500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    // marginLeft: 100,
    marginRight:100,
    width: 95,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 15,
  },
});

export default BookingScreen;
