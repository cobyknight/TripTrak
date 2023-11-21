import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { Color, FontSize, Border } from "./GlobalStyles";

const SignUpPage = () => {
  return (
    <View style={styles.signUpPage}>
      <Pressable style={styles.arrowLeft1} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/left_arrow.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupParentLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={styles.enter}>Enter</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <Text style={[styles.emailAddress, styles.usernameTypo]}>
        Email Address
      </Text>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <Text style={[styles.firstName, styles.usernameTypo]}>First Name</Text>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <Text style={[styles.signUp, styles.signUpFlexBox]}>Sign-Up</Text>
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
    color: Color.colorGray,
    left: 84,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
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
  silentlamb91gmailcom: {
    display: "none",
    fontSize: FontSize.size_base,
    left: 13,
    top: 7,
    textAlign: "left",
  },
  rectangleParent: {
    top: 221,
    left: 72,
    width: 255,
  },
  groupItem: {
    borderRadius: 110,
    backgroundColor: "#ffa660",
    left: 0,
    top: 0,
  },
  enter: {
    textAlign: "center",
    width: 121,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    left: 13,
    top: 7,
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