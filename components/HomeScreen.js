// //homescreen.js


// import * as React from 'react';
// import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { PRIMARYCOLOR, PRIMARYBORDERADIUS } from '../Constants.js';
// import { Ionicons } from '@expo/vector-icons';
// import { CustomCard } from './CustomCard';
// import bus from '../assets/images/bus.png';
// import mrt from '../assets/images/mrt.jpg';
// import { useTheme } from './ThemeContext'; // Import the useTheme hook

// export const HomeScreen = () => {
//   const nav = useNavigation();
//   const { colors, toggleTheme } = useTheme(); 
//   // Access colors and toggleTheme from the theme context

//   const DATA = [
//     {
//       id: 1,
//       name: "Bus 1",
//       backgroundColor: "#6BC5E8",
//       imagesrc: bus,
//       onPressHandler: () => {
//         nav.navigate("schedule", { title: "Bus 1", imagesrc: bus, backgroundColor: "#6BC5E8" });
//       }
//     },
//     {
//       id: 2,
//       name: "Bus 2",
//       backgroundColor: "#3A9EC2",
//       imagesrc: mrt,
//       onPressHandler: () => {
//         nav.navigate("schedule", { title: "Bus 2", imagesrc: mrt, backgroundColor: "#3A9EC2" });
//       }
//     }
//   ];

//   const transportItem = ({ item }) => {
//     return (
//       <CustomCard >
//         <View style={{ flexDirection: "row", overflow: "hidden", justifyContent: "space-between", padding: 15, backgroundColor: item.backgroundColor, marginHorizontal: 26, marginBottom: 10, borderRadius: 10 }}>
//           <View style={{ justifyContent: "space-between" }}>
//             <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
//             <TouchableOpacity style={{ backgroundColor: "#fff", width: 70, padding: 5, borderRadius: 6, marginTop: 50 }} onPress={item.onPressHandler}>
//               <Text style={{ textAlign: "center", fontWeight: "bold" }}>Select</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Image
//               style={{ position: "absolute", right: -15, bottom: 2 }}
//               source={item.imagesrc}>
//             </Image>
//           </View>
//         </View>
//       </CustomCard>
//     );
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}> {/* Apply background color from theme */}
//       <View style={styles.topview}>
//         <View style={styles.welcomecontainer}>
//           <Text style={[styles.welcomemessage, { color: colors.text }]}>{"Hello,<br/>Habiba, sadaf & hammad".split("<br/>").join("\n")}</Text> {/* Apply text color from theme */}
//           <View style={[styles.circle, { backgroundColor: colors.circle }]}></View> {/* Apply circle background color from theme */}
//         </View>
//         <Text style={{ color: colors.text }}> Where will you go</Text> {/* Apply text color from theme */}
//         <View style={[styles.searchbar, { backgroundColor: colors.inputBackground }]}> {/* Apply input background color from theme */}
//           <Ionicons name="search-outline" size={25} color="#BEBEBE" style={{ width: 40, transform: [{ rotateY: '180deg' }] }} />
//           <TextInput placeholder="Search" style={{ color: colors.inputText, marginLeft: 15, opacity: 0.5, fontSize: 20 }} placeholderTextColor={colors.placeholderText}></TextInput> {/* Apply input text color and placeholder text color from theme */}
//         </View>
//       </View>
//       <View style={styles.bottomview}>
//         <CustomCard elevated={true} style={{ backgroundColor: colors.cardBackground, marginHorizontal: 24, marginTop: -40, padding: 30, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}> {/* Apply card background color from theme */}
//           <View style={{ alignItems: "center" }}>
//             <Text style={[styles.cardText, { color: colors.text }]}>Balance</Text> {/* Apply text color from theme */}
//             <Text style={[styles.cardValue, { color: colors.text }]}>$ 18</Text> {/* Apply text color from theme */}
//           </View>
//           <View style={{ alignItems: "center" }}>
//             <Text style={[styles.cardText, { color: colors.text }]}>Rewards</Text> {/* Apply text color from theme */}
//             <Text style={[styles.cardValue, { color: colors.text }]}>$ 10.25</Text> {/* Apply text color from theme */}
//           </View>
//           <View style={{ alignItems: "center" }}>
//             <Text style={[styles.cardText, { color: colors.text }]}>Total Trips</Text> {/* Apply text color from theme */}
//             <Text style={[styles.cardValue, { color: colors.text }]}>189</Text> {/* Apply text color from theme */}
//           </View>
//         </CustomCard>
//         <Text style={[styles.chooseText, { color: colors.text }]}>Choose your Transport</Text> {/* Apply text color from theme */}
//         <View>
//           <FlatList
//             data={DATA}
//             renderItem={transportItem}
//             keyExtractor={(item) => item.id}
//           />
//         </View>
//         <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
//           <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 26, backgroundColor: colors.navBackground }}> {/* Apply nav background color from theme */}
//             <Ionicons name="home" size={25} color={colors.activeIcon} /> {/* Apply icon color from theme */}
//             <Ionicons name="person" size={25} color={colors.inactiveIcon} /> {/* Apply icon color from theme */}
//             <Ionicons name="location-sharp" size={25} color={colors.inactiveIcon} /> {/* Apply icon color from theme */}
//           </View>
//         </View>
//         <TouchableOpacity onPress={toggleTheme} style={[styles.themeButton, { backgroundColor: colors.buttonBackground }]}> {/* Apply button background color from theme */}
//           <Text style={{ color: colors.buttonText }}>Toggle Theme</Text> {/* Apply button text color from theme */}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   topview: {
//     marginTop: 60,
//     marginHorizontal: 24,
//     backgroundColor: PRIMARYCOLOR,
//     flex: 1,
//     justifyContent: "space-between"
//   },
//   welcomemessage: {
//     fontSize: 35,
//     fontWeight: "bold"
//   },
//   searchbar: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "100%",
//     height: 40,
//     borderRadius: 10,
//     marginBottom: 65
//   },
//   circle: {
//     borderRadius: 25,
//     height: 50,
//     width: 50
//   },
//   welcomecontainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center"
//   },
//   bottomview: {
//     flex: 2,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//   },
//   container: {
//     flex: 1,
//   },
//   cardText: {
//     fontWeight: "bold",
//     marginBottom: 10
//   },
//   cardValue: {
//     fontWeight: "bold",
//     fontSize: 18
//   },
//   chooseText: {
//     marginHorizontal: 26,
//     marginVertical: 20,
//     fontWeight: "bold",
//     fontSize: 20
//   },
//   themeButton: {
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginHorizontal: 20,
//     marginTop: 20
//   }
// });






//2

// import * as React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import bus from '../assets/images/bus.png';
// import mrt from '../assets/images/mrt.jpg';
// import { useTheme } from './ThemeContext'; // Import the useTheme hook

// // Dummy Bus Routes Data
// const DATA = [
//   {
//     id: 1,
//     name: 'Bus 1',
//     backgroundColor: '#6BC5E8',
//     imagesrc: bus,
//     onPressHandler: (nav) => {
//       nav.navigate('schedule', { title: 'Bus 1', imagesrc: bus, backgroundColor: '#6BC5E8' });
//     },
//   },
//   {
//     id: 2,
//     name: 'Bus 2',
//     backgroundColor: '#3A9EC2',
//     imagesrc: mrt,
//     onPressHandler: (nav) => {
//       nav.navigate('schedule', { title: 'Bus 2', imagesrc: mrt, backgroundColor: '#3A9EC2' });
//     },
//   },
// ];

// export const HomeScreen = () => {
//   const nav = useNavigation();
//   const { colors, toggleTheme } = useTheme(); // Access theme colors and the toggle function

//   return (
//     <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={[styles.headerTitle, { color: colors.text }]}>Welcome to ShuttleBuddy</Text>
//         <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
//           <Ionicons name="md-moon" size={24} color={colors.text} />
//         </TouchableOpacity>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="md-search" size={20} color={colors.text} />
//         <TextInput
//           style={[styles.searchInput, { color: colors.text, borderColor: colors.border }]}
//           placeholder="Search for shuttles, routes, or stops..."
//           placeholderTextColor={colors.placeholder}
//         />
//       </View>

//       {/* Transportation Options Section */}
//       <Text style={[styles.sectionTitle, { color: colors.text }]}>Available Bus Routes</Text>
//       <FlatList
//         data={DATA}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={[styles.card, { backgroundColor: item.backgroundColor }]}
//             onPress={() => item.onPressHandler(nav)}
//           >
//             <Image source={item.imagesrc} style={styles.cardImage} />
//             <View style={styles.cardTextContainer}>
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <Text style={styles.cardSubtitle}>Tap to view schedule</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.horizontalList}
//       />

//       {/* Quick Navigation Section */}
//       <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Navigation</Text>
//       <View style={styles.navigationButtons}>
//         <TouchableOpacity
//           style={[styles.navButton, { backgroundColor: colors.primaryButton }]}
//           onPress={() => nav.navigate('BookingScreen')}
//         >
//           <Ionicons name="md-calendar" size={24} color={colors.buttonText} />
//           <Text style={[styles.navButtonText, { color: colors.buttonText }]}>Book a Shuttle</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navButton, { backgroundColor: colors.secondaryButton }]}
//           onPress={() => nav.navigate('BookingHistory')}
//         >
//           <Ionicons name="md-time" size={24} color={colors.buttonText} />
//           <Text style={[styles.navButtonText, { color: colors.buttonText }]}>Booking History</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navButton, { backgroundColor: colors.secondaryButton }]}
//           onPress={() => nav.navigate('LiveTracking')}
//         >
//           <Ionicons name="md-pin" size={24} color={colors.buttonText} />
//           <Text style={[styles.navButtonText, { color: colors.buttonText }]}>Live Tracking</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   themeToggle: {
//     padding: 10,
//     borderRadius: 50,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 8,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   searchInput: {
//     marginLeft: 10,
//     flex: 1,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     marginBottom: 10,
//     fontWeight: '600',
//   },
//   horizontalList: {
//     paddingBottom: 20,
//   },
//   card: {
//     width: 200,
//     height: 150,
//     marginRight: 15,
//     borderRadius: 12,
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardImage: {
//     width: 60,
//     height: 60,
//     marginBottom: 10,
//   },
//   cardTextContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//   },
//   navigationButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   navButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 5,
//   },
//   navButtonText: {
//     marginTop: 5,
//     fontSize: 16,
//   },
// });

// export default HomeScreen;


//3

// import * as React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import bus from '../assets/images/bus.png';
// import mrt from '../assets/images/mrt.jpg';
// import { useTheme } from './ThemeContext'; // Import the useTheme hook

// // Dummy Bus Routes Data
// const DATA = [
//   {
//     id: 1,
//     name: 'Bus 1',
//     backgroundColor: '#6BC5E8',
//     imagesrc: bus,
//     onPressHandler: (nav) => {
//       nav.navigate('schedule', { title: 'Bus 1', imagesrc: bus, backgroundColor: '#6BC5E8' });
//     },
//   },
//   {
//     id: 2,
//     name: 'Bus 2',
//     backgroundColor: '#3A9EC2',
//     imagesrc: mrt,
//     onPressHandler: (nav) => {
//       nav.navigate('schedule', { title: 'Bus 2', imagesrc: mrt, backgroundColor: '#3A9EC2' });
//     },
//   },
// ];

// export const HomeScreen = () => {
//   const nav = useNavigation();
//   const { colors, toggleTheme } = useTheme(); // Access theme colors and the toggle function

//   return (
//     <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={[styles.headerTitle, { color: colors.text }]}>Welcome to ShuttleBuddy</Text>
//         <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
//           <Ionicons name="md-moon" size={28} color={colors.text} />
//         </TouchableOpacity>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="md-search" size={22} color={colors.text} />
//         <TextInput
//           style={[styles.searchInput, { color: colors.text, borderColor: colors.border }]}
//           placeholder="Search for shuttles, routes, or stops..."
//           placeholderTextColor={colors.placeholder}
//         />
//       </View>

//       {/* Transportation Options Section */}
//       <Text style={[styles.sectionTitle, { color: colors.text }]}>Available Bus Routes</Text>
//       <FlatList
//         data={DATA}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={[styles.card, { backgroundColor: item.backgroundColor }]}
//             onPress={() => item.onPressHandler(nav)}
//           >
//             <Image source={item.imagesrc} style={styles.cardImage} />
//             <View style={styles.cardTextContainer}>
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <Text style={styles.cardSubtitle}>Tap to view schedule</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.horizontalList}
//       />

//       {/* Quick Navigation Section */}
//       <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Navigation</Text>
//       <View style={styles.navigationButtons}>
//         <TouchableOpacity
//           style={[styles.navButton, { backgroundColor: colors.primaryButton }]}
//           onPress={() => nav.navigate('BookingScreen')}
//         >
//           <Ionicons name="md-calendar" size={26} color={colors.buttonText} />
//           <Text style={[styles.navButtonText, { color: colors.buttonText }]}>Book a Shuttle</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navButton, { backgroundColor: colors.secondaryButton }]}
//           onPress={() => nav.navigate('BookingHistory')}
//         >
//           <Ionicons name="md-time" size={26} color={colors.buttonText} />
//           <Text style={[styles.navButtonText, { color: colors.buttonText }]}>Booking History</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navButton, { backgroundColor: colors.secondaryButton }]}
//           onPress={() => nav.navigate('LiveTracking')}
//         >
//           <Ionicons name="md-pin" size={26} color={colors.buttonText} />
//           <Text style={[styles.navButtonText, { color: colors.buttonText }]}>Live Tracking</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#E5E5E5', // Light background color
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     letterSpacing: 0.5,
//   },
//   themeToggle: {
//     padding: 10,
//     borderRadius: 50,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     marginTop: 20,
//     marginBottom: 20,
//     backgroundColor: '#FFFFFF',
//     elevation: 5, // Shadow effect
//   },
//   searchInput: {
//     marginLeft: 10,
//     flex: 1,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     marginBottom: 10,
//     fontWeight: '600',
//     letterSpacing: 0.5,
//   },
//   horizontalList: {
//     paddingBottom: 20,
//   },
//   card: {
//     width: 200,
//     height: 150,
//     marginRight: 15,
//     borderRadius: 15,
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5, // Shadow effect
//   },
//   cardImage: {
//     width: 70,
//     height: 70,
//     marginBottom: 5,
//   },
//   cardTextContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#FFF',
//   },
//   navigationButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   navButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 5,
//     elevation: 3, // Shadow effect
//   },
//   navButtonText: {
//     marginTop: 5,
//     fontSize: 16,
//   },
// });

// export default HomeScreen;






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
