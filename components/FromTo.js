// //fromto.js

// import * as React from 'react';
// import {Text,View} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export const FromTo = (props) =>{
//   return (
//     <View style={{width:"100%"}}>
//       <View style={{flexDirection:"row",marginBottom:15,alignItems:"center"}}>
//             <Ionicons name="location-sharp" size={26} color={props.backgroundColor}  />
//             <View style={{marginLeft:20}}>
//               <Text style={{opacity:0.6,fontSize:15}}>From</Text>
//               <Text style={{fontWeight:"bold",fontSize:15,marginTop:10}}>Lorem MRT Station</Text>
//             </View>
//       </View>
//       <View style={{position:"absolute",left:12,height:28,borderWidth:1,top:42,width:0,borderColor:"#EBE7E6"}}>
//       </View>
//        <View style={{flexDirection:"row" ,alignItems:"center", borderTopStartRadius:60,borderTopEndRadius:20,borderColor:"#EBE7E6",borderTopWidth:2}}>
//             <Ionicons name="location-sharp" size={26} color="#5C7A82"  />
//             <View style={{marginLeft:20}}>
//               <Text style={{opacity:0.6,fontSize:15,marginTop:10}}>To</Text>
//               <Text style={{fontWeight:"bold",fontSize:15,marginTop:10}}>Lorem MRT Station</Text>
//             </View>
//       </View>
//     </View>
//   );
// };



//new

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



