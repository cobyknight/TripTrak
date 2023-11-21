import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { Color, FontSize, Border } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation


const SignUpPage = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("LoginPage"); // Navigate to the 'search page' screen
  };

  return (
    <View style={styles.signUpPage}>
      <Text style={styles.signUp}>Sign-Up</Text>
      <Pressable style={styles.arrowLeft1} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/left_arrow.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Pressable onPress={handlePress}>
          <Text style={[styles.enter, styles.enterTypo]}>Enter</Text>
        </Pressable>
      </View>
      <TextInput
        style={[styles.emailAddress, styles.usernameTypo]}
        placeholder="Email Address"
      />
      <TextInput
        style={[styles.firstName, styles.usernameTypo]}
        placeholder="First Name"
      />
      <TextInput
        style={[styles.username, styles.usernameTypo]}
        placeholder="Username"
      />
      <TextInput
        style={[styles.password, styles.usernameTypo]}
        placeholder="Password"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupParentLayout: {
    height: 38,
    width: 255,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  signUpFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupLayout: {
    width: 147,
    height: 38,
    position: "absolute",
  },
  usernameTypo: {
    left: 63,
    textAlign: "left",
    position: "absolute",
    width: 275,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_base,
  },
  icon: {
    height: "100%",
  },
  arrowLeft1: {
    left: 15,
    top: 46,
    width: 61,
    height: 56,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    height: 38,
    width: 255,
    position: "absolute",
  },
  rectangleLayout: {
    width: 147,
    left: 126,
    height: 38,
    position: "absolute",
  },
  rectangleParent: {
    top: 550,
  },
  groupItem: {
    borderRadius: 110,
    backgroundColor: "#ffa660",
    left: 0,
    top: 0,
  },
  enter: {
    top: 7,
    left: 13,
    width: 121,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  enterTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleGroup: {
    top: 515,
    left: 126,
  },
  rectangleContainer: {
    top: 450,
    left: 72,
    width: 255,
  },
  emailAddress: {
    top: 228,
  },
  groupView: {
    top: 296,
    left: 72,
    width: 255,
  },
  firstName: {
    top: 303,
  },
  rectangleParent1: {
    top: 371,
    left: 72,
    width: 255,
  },
  username: {
    top: 379,
  },
  password: {
    top: 457,
  },
  signUp: {
    top: 134,
    left: 130,
    fontSize: 30,
    fontWeight: "600",
  },
  signUpPage: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "#008C8F",
  },
});

export default SignUpPage;