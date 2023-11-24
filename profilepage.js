import React from "react";
import { TextInput, Image, SafeAreaView, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome

const ProfilePage = () => {
  const navigation = useNavigation();
  const tempPressLocation = () => {
    navigation.navigate("SignInPage");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <FontAwesome name="history" size={30} color="white" style={styles.icon} />
        <Text style={styles.menuText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <FontAwesome name="bell" size={30} color="white" style={styles.icon} />
        <Text style={styles.menuText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <FontAwesome name="shield" size={30} color="white" style={styles.icon} />
        <Text style={styles.menuText}>Privacy</Text>
      </TouchableOpacity>

      <Pressable style={({ pressed }) => [ styles.signOutButton, { backgroundColor: pressed ? "#0089a3" : "#008080", alignSelf: 'center', }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
        <Text style={{color:'white', fontWeight: 'bold', }}>Sign Out</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    signOutButton: {
    flexDirection: 'row',
    height: 40, 
    padding: 10,
    backgroundColor: "#008080",
    borderRadius: 50,
    margin: 10,
    paddingHorizontal: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 40,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20, 
    paddingHorizontal: 20, 
    width: "100%",
    left: 15,
  },
  icon: {
    marginRight: 20, 
  },
  menuText: {
    color: 'white',
    fontSize: 22, 
  }
});

export default ProfilePage;