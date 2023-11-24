import React from "react";
import { ScrollView, TextInput, Image, SafeAreaView, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome

const SignUpPage = () => {
  const navigation = useNavigation();
  const goToSignInPage = () => {
    navigation.navigate("SignInPage")
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>
        <ScrollView>
            <Image source={require('./assets/TripTrakLogo.png')} style={styles.logo} />
            <Text style={styles.signInText}>Sign Up</Text>
            <TextInput style={styles.searchBarContainer} placeholder="Email" placeholderTextColor="gray" />
            <TextInput style={styles.searchBarContainer} placeholder="Password" placeholderTextColor="gray" secureTextEntry={true} />
            <TextInput style={styles.searchBarContainer} placeholder="Re-type Password" placeholderTextColor="gray" secureTextEntry={true} />
            <TextInput style={styles.searchBarContainer} placeholder="First and Last Name" placeholderTextColor="gray" />
            <Pressable style={({ pressed }) => [ styles.signInButton, { backgroundColor: pressed ? "#0089a3" : "#008080", alignSelf: 'center', }, ]} onPress={goToSignInPage} android_ripple={{ color: "#b3b3b3", borderless: true }}>
                <Text style={{color:'white', fontWeight: 'bold', }}>Sign Up</Text>
            </Pressable>
            <Text style={styles.signUpButton}>
                <Text>Already have an account?</Text>
                <Pressable onPress={goToSignInPage}>
                    <Text style={{color:'white'}}> Sign In Now!</Text>
                </Pressable>
            </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: -70,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  signInText: {
    color: 'white', 
    fontWeight: "bold",
    fontSize: 30,
    marginStart: 40,
    marginTop: -70,
  },
  searchBarContainer: {
    flexDirection: 'row',
    height: 40, 
    padding: 10,
    backgroundColor: "#323945",
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 40, 
    color: 'white',
  },
  signInButton: {
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
  signUpButton:{
    color: 'gray', 
    flexDirection: 'row', 
    marginTop: 100, 
    marginStart: 45,
  },
});

export default SignUpPage;
