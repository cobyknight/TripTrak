import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Import FontAwesome

const Profile = () => {
  // Example function to handle logout
//  const handleLogout = () => {
    // Perform logout operations...
//    console.log("User logged out");
    // Then navigate to the login screen or another appropriate screen
    // navigation.navigate('Login');
//  };
  // Placeholder functions for other menu items
  const handleHistory = () => console.log("Navigate to History");
  const handleNotifications = () => console.log("Navigate to Notifications");
  const handlePrivacy = () => console.log("Navigate to Privacy");

  const navigation = useNavigation(); // Initialize navigation

  const handlePress = () => {
    navigation.navigate("LoginPage"); // Navigate to the 'Login Screen' screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Hello, Clarice</Text>
        <View style={styles.headerUnderline} />
      </View>
      <Pressable style={styles.menuItem} onPress={() => {}}>
        <FontAwesome
          name="history"
          size={30}
          color="#000"
          style={styles.icon}
        />
        <Text style={styles.menuText}> History</Text>
      </Pressable>
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <FontAwesome name="bell" size={30} color="#000" style={styles.icon} />
        <Text style={styles.menuText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <FontAwesome name="shield" size={30} color="#000" style={styles.icon} />
        <Text style={styles.menuText}> Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={handlePress} // Use the handlePress function
      >
        <FontAwesome
          name="sign-out"
          size={30}
          color="#000"
          style={styles.icon}
        />
        <Text style={styles.menuText}> Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Centers the header underline
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  headerContainer: {
    alignItems: "center",
    width: "100%", // Full width to align text to the left
    paddingHorizontal: 20, // Padding from the left and right edges
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left", // Aligns the header text to the left
  },
  headerUnderline: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignSelf: "center", // Center the underline
    width: "90%", // Width of the underline
    marginTop: 15, // Space between text and underline
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20, // Increased padding for larger touch area
    paddingHorizontal: 20, // Padding from the left edge
    width: "100%", // Full width to align items properly
    left: 15,
  },
  icon: {
    marginRight: 20, // Space between the icon and the text
  },
  menuText: {
    fontSize: 22, // Larger font size for menu items
  },
  // ... any additional styles you need
});

export default Profile;
