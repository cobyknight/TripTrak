import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MainPage() {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Search');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#008C8F",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 200, // Added padding to move content down
      }}
    >
      <Image
        source={require("./assets/TripTrak_Logo.png")}
        style={{ width: 200, height: 200, marginBottom: 20 }} // Adjusted margin to move the logo down
      />
      <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <TextInput
          style={{
            width: 300,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#f0f0f0",
            marginBottom: 10,
          }}
          placeholder="Enter a location"
        />
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            backgroundColor: "#FFA660",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleButtonPress}
        >
          <Text style={{ color: "white" }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainPage;
