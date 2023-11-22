import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert } from "react-native";
import { FontSize } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { handleSignUp } from './authService'; // Import authentication handle methods

const SignUpPage = () => {

  const navigation = useNavigation();
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState('');

  const handlePress = () => {
    navigation.navigate("Profile");
  };

  const handleSignUpClick = () => {
    handleSignUp(signUpEmail, signUpPassword, firstName, setMessage);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.signUp}>Sign-Up</Text>
      <Pressable style={styles.arrowLeft1} onPress={handlePress}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/left_arrow.png")}
        />
      </Pressable>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={signUpEmail}
          onChangeText={setSignUpEmail}
        />
                <TextInput
          style={styles.input}
          placeholder="Password"
          value={signUpPassword}
          secureTextEntry
          onChangeText={setSignUpPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Pressable style={styles.button} onPress={handleSignUpClick}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#008C8F",
  },
  signUp: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  arrowLeft1: {
    position: "absolute",
    left: 15,
    top: 46,
    width: 61,
    height: 56,
  },
  icon: {
    height: "100%",
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#ffa660",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  errorContainer: {
    position: "absolute",
    top: 230,
    width: "100%",
    alignItems: "center",
  },
  errorMessage: {
    color: "#000",
    fontSize: FontSize.size_base,
  },
});

export default SignUpPage;
