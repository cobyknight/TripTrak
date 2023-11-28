import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, SafeAreaView, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome
import { handleSignOut, } from "./authService";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  
  const handleSignOutClick = () => {
    handleSignOut(setMessage);
  }

  const handleSignInClick = () => {
    navigation.navigate('SignInPage');
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const getFirstName = () => {
    if (user && user.providerData && user.providerData.length > 0) {
      const displayName = user.providerData[0].displayName;
      if (displayName) {
        const firstName = displayName.split(' ')[0];
        return firstName;
      }
    }
    return 'user';
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>
      <ScrollView>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Hello, {getFirstName()}</Text>
          <Image source={require('./assets/profile_photos/person.png')} style={styles.image} />
        </View>

        <View style={{flexDirection:'column', marginTop: 100,}}>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <FontAwesome name={"history"} size={30} color={'white'} style={{marginStart: 50, marginRight: -30,}} />
            <Text style={styles.menuText}>History</Text>
            <FontAwesome name={"arrow-right"} size={20} color={'white'} style={{marginStart: 150}}/>
          </TouchableOpacity>
          <View style={styles.line}/>

          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <FontAwesome name={"envelope"} size={30} color={'white'} style={{marginStart: 50, marginRight: -30,}} />
            <Text style={styles.menuText}>Notifications</Text>
            <FontAwesome name={"arrow-right"} size={20} color={'white'} style={{marginStart: 86}}/>
          </TouchableOpacity>
          <View style={styles.line}/>

          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <FontAwesome name={"shield"} size={30} color={'white'} style={{marginStart: 54, marginRight: -26,}} />
            <Text style={styles.menuText}>Privacy</Text>
            <FontAwesome name={"arrow-right"} size={20} color={'white'} style={{marginStart: 143}}/>
          </TouchableOpacity>
          <View style={styles.line}/>

          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <FontAwesome name={"gear"} size={30} color={'white'} style={{marginStart: 54, marginRight: -32,}} />
            <Text style={styles.menuText}>Settings</Text>
            <FontAwesome name={"arrow-right"} size={20} color={'white'} style={{marginStart: 134}}/>
          </TouchableOpacity>
          <View style={styles.line}/>

          <Pressable style={({ pressed }) => [ styles.signInButton, { backgroundColor: pressed ? "gray" : "transparent", alignSelf: 'center', }, ]} onPress={handleSignInClick} android_ripple={{ color: "#b3b3b3", borderless: false }}>
            <Text style={{color:'white', fontWeight: 'bold', }}>Sign In</Text>
          </Pressable>

          <Pressable style={({ pressed }) => [ styles.signOutButton, { backgroundColor: pressed ? "gray" : "transparent", alignSelf: 'center', }, ]} onPress={handleSignOutClick} android_ripple={{ color: "#b3b3b3", borderless: false }}>
            <Text style={{color:'white', fontWeight: 'bold', }}>Sign Out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  image: {
    marginTop: 25,
    marginStart: 60,
    width: 70,
    height: 70,
    borderRadius: 70/2,
  },
  signInButton: {
    flexDirection: 'column',
    height: 40, 
    padding: 8,
    backgroundColor: "#008080",
    borderRadius: 50,
    margin: 10,
    paddingHorizontal: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,        
    borderColor: 'white',
  },
    signOutButton: {
    flexDirection: 'column',
    height: 60,
    padding: 8,
    backgroundColor: "#008080",
    borderRadius: 50,
    margin: 10,
    paddingHorizontal: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,        
    borderColor: 'white',
  },
  line: {
    height: 1,
    width: '80%',
    backgroundColor: 'gray',
    marginVertical: 15,
    alignSelf: 'center'
  },
  menuItem: {
    flexDirection: "row",
    alignItems:'center',
  },
  menuText: {
    color: 'white',
    marginLeft: 50,
    fontSize: 20,
  },
});

export default ProfilePage;