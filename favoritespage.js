import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome

const FavoritesPage = () => {
  const navigation = useNavigation();
  const handleLocationPress = () => {
    navigation.navigate('BatonRougeFavorites');
  };

  // Move the Favorites component content here
  const Favorites = () => {
    // Sample data - replace this with your actual data source
    const favoriteLocations = [
      { id: '1', name: 'Baton Rouge, LA' },
      // Add more favorite locations here
    ];

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.item} onPress={() => handleLocationPress(item)}>
        <Text style={styles.locationName}>{item.name}</Text>
        <Text style={styles.locationArrow}>{'>'}</Text>
      </TouchableOpacity>
    );
    

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Favorite Locations</Text>
        <FlatList
          data={favoriteLocations}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={styles.placeholderText}>No favorite locations added yet.</Text>}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>
      <Favorites />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    top: 45,
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    top: 65
  },
  locationName: {
    fontSize: 18,
    color: 'white',
  },
  locationArrow: {
    fontSize: 18,
    color: '#ccc',
  },
  placeholderText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
});

export default FavoritesPage;
