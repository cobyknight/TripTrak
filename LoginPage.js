import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet, Button } from "react-native";
import { Border, FontSize, Color } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { handleSignIn } from './authService'; // Import authentication handle methods

const LoginPage = () => {

  const navigation = useNavigation();
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [message, setMessage] = useState('');
  // const [resetPasswordEmail, setResetPasswordEmail] = useState('');        For later use

  const handlePress = () => {
    navigation.navigate("Profile");
  };

  const handlePress2 = () => {
    navigation.navigate("SignUpPage")
  }

  const handleSignInClick = () => {
    handleSignIn(signInEmail, signInPassword, setMessage);
  };

  // const handleResetPasswordClick = () => {                       For later use
  //   sendPasswordReset(resetPasswordEmail)
  //     .then(() => setMessage('Password reset email sent!'))
  //     .catch((error) => setMessage(`Password reset failed: ${error.message}`));
  // };

  return (
    <View style={styles.loginPage}>
      <Text style={styles.signIn}>Sign-In</Text>
      <Pressable style={styles.arrowLeft1} onPress={handlePress}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/left_arrow.png")}
        />
      </Pressable>
      <TextInput
        style={[styles.email, styles.emailTypo]}
        placeholder="Email"
        value={signInEmail}
        onChangeText={setSignInEmail}
      />
      <TextInput
        style={[styles.password, styles.emailTypo]}
        placeholder="Password"
        value={signInPassword}
        secureTextEntry
        onChangeText={setSignInPassword}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Pressable onPress={handleSignInClick}>
          <Text style={[styles.enter, styles.enterTypo]}>Enter</Text>
        </Pressable>
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{message}</Text>
      </View>
      
      <Text style={[styles.dontHaveAn, styles.enterTypo]}>Don't have an account?</Text>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={handlePress2}
      >
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.enter, styles.enterTypo]}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLeft1: {
    position: "absolute",
    left: 15,
    top: 46,
    width: 61,
    height: 56,
  },
  loginLayout: {
    height: 38,
    width: 255,
    left: 72,
    position: "absolute",
  },
  rectangleLayout: {
    width: 147,
    left: 126,
    height: 38,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_91xl,
    width: 147,
    left: -5,
    top: 0,
    height: 38,
    position: "absolute",
  },
  enterTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  emailTypo: {
    left: 63,
    textAlign: "left",
    position: "absolute",
    width: 275,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_base,
  },
  signIn: {
    top: 132,
    left: 140,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    left: 0,
    top: 0,
    height: 38,
    width: 255,
    position: "absolute",
  },
  loginPageInner: {
    top: 221,
  },
  groupItem: {
    backgroundColor: "#ffa660",
  },
  enter: {
    top: 7,
    left: 10,
    width: 121,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  rectangleParent: {
    top: 359,
  },
  groupInner: {
    backgroundColor: "#ff6c0a",
  },
  rectangleGroup: {
    top: 501,
  },
  loginPageChild: {
    top: 294,
  },
  email: {
    top: 228,
  },
  password: {
    top: 301,
  },
  dontHaveAn: {
    top: 470,
    color: "#fff",
    width: 256,
    height: 50,
    left: 72,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
    errorContainer: {
    position: "absolute",
    top: 420,
    width: "100%",
    alignItems: "center",
  },
  errorMessage: {
    color: "#000",
    fontSize: FontSize.size_base,
  },
  loginPage: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "#008C8F",
  },
});

export default LoginPage;
