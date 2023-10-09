import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    destination: '',
  };

  handleSearch = () => {
    // Handle the search functionality here
    console.log('Searching for:', this.state.destination);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>TripTrak</Text>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search your destination"
            onChangeText={(destination) => this.setState({ destination })}
            value={this.state.destination}
          />
          <TouchableOpacity style={styles.searchButton} onPress={this.handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light gray background
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    height: 150, // Increased height
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 36, // Increased font size
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    paddingHorizontal: 20, // Increased horizontal padding
  },
  input: {
    flex: 1,
    borderColor: '#1E90FF',
    borderWidth: 1,
    borderRadius: 25, // Rounded corners
    paddingVertical: 12, // Increased vertical padding
    paddingHorizontal: 16, // Increased horizontal padding
    marginRight: 10,
    backgroundColor: '#fff', // White background
  },
  searchButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 25, // Rounded corners
    paddingVertical: 12, // Increased vertical padding
    paddingHorizontal: 16, // Increased horizontal padding
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
