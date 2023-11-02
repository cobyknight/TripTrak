import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import Favorites from './favorites';
import Profile from './profile';

export default function App() {
  const handleSearch = () => {
    // Handle the search functionality here
  };

  const handleFavorites = () => {
    // Handle the favorites functionality here
  };

  const handleProfile = () => {
    // Handle the profile functionality here
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/TripTrak_Logo.png')}
        style={styles.logo}
      />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter a location"
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom bar with three buttons */}
      <View style={styles.bottomBar}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Image source={require('./assets/search_button.png')} style={styles.buttonImage} />
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleFavorites}>
            <Image source={require('./assets/favorite_button.jpg')} style={styles.buttonImage} />
            <Text>Favorites</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleProfile}>
            <Image source={require('./assets/profile_button.png')} style={styles.buttonImage} />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  searchContainer: {
    alignItems: 'center',
  },
  searchInput: {
    width: 300,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  searchButton: {
    width: 100,
    height: 40,
    backgroundColor: '#FFA660',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F6F6F6',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
});
