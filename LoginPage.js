import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Border, FontSize, Color } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const LoginPage = () => {

const navigation = useNavigation();

const handlePress = () => {
  navigation.navigate("Search"); // Navigate to the 'search page' screen
};

const handlePress2 = () => {
  navigation.navigate("SignUpPage")
}

  return (
    <View style={styles.loginPage}>
      <Text style={styles.signIn}>Sign-In</Text>
      <TextInput
        style={[styles.username, styles.usernameTypo]}
        placeholder="Username"
      />
      <TextInput
        style={[styles.password, styles.usernameTypo]}
        placeholder="Password"
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Pressable onPress={handlePress}>
          <Text style={[styles.enter, styles.enterTypo]}>Enter</Text>
        </Pressable>
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
    left: 0,
    top: 0,
    height: 38,
    position: "absolute",
  },
  enterTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
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
    left: 13,
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
  username: {
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
  loginPage: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "#008C8F",
  },
});

export default LoginPage;
