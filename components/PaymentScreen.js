
import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomCard } from './CustomCard';
import { FromTo } from './FromTo';
import SvgQRCode from 'react-native-qrcode-svg';

export const PaymentScreen = () => {
  const [amount, setAmount] = React.useState('5.0');

  const handleBuyTicket = () => {
    alert(`Ticket bought for $${amount}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket</Text>
      <CustomCard elevated style={styles.card}>
        <FromTo fromLocation="Lorem MRT Station" toLocation="Dolor MRT Station" />
        <View style={styles.infoContainer}>
          <View>
            <TicketInfo icon="timer-outline" text="10:00 - 10:30" />
            <TicketInfo icon="location-outline" text="Lorem MRT Station" />
            <TicketInfo icon="cash-outline" text={`$ ${amount}`} />
          </View>
          <SvgQRCode value="http://example.com" />
        </View>
      </CustomCard>
      <Text style={styles.paymentTitle}>Payment</Text>
      <Text style={styles.enterAmount}>Enter Amount</Text>
      <TextInput
        value={`$ ${amount}`}
        onChangeText={setAmount}
        style={styles.amountInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleBuyTicket}>
        <Text style={styles.buttonText}>Buy Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const TicketInfo = ({ icon, text }) => (
  <View style={styles.ticketInfo}>
    <Ionicons name={icon} size={15} color="#000" />
    <Text style={styles.ticketText}>{text}</Text>
  </View>
);

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
    marginBottom: 22,
  },
  card: {
    padding: 22,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  enterAmount: {
    fontSize: 15,
    marginBottom: 5,
  },
  amountInput: {
    backgroundColor: '#EBE7E6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'yellow',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ticketInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ticketText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
