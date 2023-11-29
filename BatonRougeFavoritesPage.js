import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

// Component for a category button with onPress handler
const CategoryButton = ({ category, selectedCategory, onPress }) => (
  <Pressable
    style={({ pressed }) => [styles.scrollBox, { backgroundColor: pressed ? "#4b5669" : "#323945" }]}
    onPress={() => onPress(category)}
    android_ripple={{ color: "#b3b3b3", borderless: true }}
  >
    <Text style={[styles.scrollBoxText, { fontWeight: selectedCategory === category ? 'bold' : 'normal' }]}>
      {category}
    </Text>
  </Pressable>
);

const SearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category press
  const handleCategoryPress = (category) => {
    // If the selected category is pressed again, reset the filter
    setSelectedCategory(selectedCategory === category ? null : category);
  };
  
  const navigation = useNavigation();

  // Function to navigate to a selected location
  const goToLocation = (index) => {
    const selectedLocation = filteredLocations[index];
    const screenToNavigate = selectedLocation.goTo || "SearchPage"; // Default to a screen named "DefaultScreen" if goTo is not specified
    navigation.navigate(screenToNavigate);
  };

  const locations = [
    // Sample location data
    // ...
  ];

  // Filtering locations based on the selected category
  const filteredLocations = locations.filter((location) => {
    if (!location.category) {
      return selectedCategory === null; // If no category is specified, include in all cases
    }

    // If location has a single category
    if (typeof location.category === 'string') {
      return selectedCategory === null || location.category === selectedCategory;
    }

    // If location has multiple categories
    return selectedCategory === null || location.category.includes(selectedCategory);
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>

      {/* Header */}
      <Text style={styles.header}>Favorites: Baton Rouge</Text>

      {/* Scrollable content container */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Displaying filtered locations */}
        {filteredLocations.map((location, index) => (
          <Pressable key={index} style={({ pressed }) => [styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945" }]} onPress={() => goToLocation(index)} android_ripple={{ color: "#b3b3b3", borderless: true }} >
            {/* Location image */}
            <Image source={location.image} style={styles.boxImage} />

            {/* Location details */}
            <Text style={styles.boxText}>
              <Text style={{ color: 'white' }}>{location.name}</Text>{'\n'}
              <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
              <Text style={{ color: 'white' }}>{location.rating}</Text>
              <Text style={{ color: '#FFA500' }}> ★</Text>
              <Text style={{ color: 'white' }}> ⋅</Text>
              <Text style={{ color: '#008080' }}> {location.price}</Text>
              <Text style={{color: 'white'}}> ⋅ {location.category}</Text>
            </Text>

            {/* Heart icon */}
            <FontAwesome name={location.icon} size={30} color="white" style={styles.icon1} />

            {/* Conditionally render ranking for the first 3 places */}
            {
              // index < 3 && (
              //<Text style={styles.ranking}>
                //<Text style={{ color: index === 0 ? 'gold' : index === 1 ? 'silver' : 'brown', fontSize: 30, }}>
                 // {index + 1}
                //</Text>
              //</Text>
            //)
            }
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  icon: {
    top: -1,
  },
  icon1: {
    top: -185,
    left: 300,
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
  },
  scrollBarContainer: {
    padding: 0,
    marginBottom: 20,
  },
  scrollBox:{
    width: 100,
    height: 30,
    backgroundColor: "#323945",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollBoxText: {
    color: 'white',
    textAlign: "center",
    fontWeight: "bold",
  },
  contentContainer: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "90%",
    height: 200,
    backgroundColor: "#323945",
    borderRadius: 9,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxText: {
    top: -5,
    left: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  ranking: {
    top: -75,
    right: 20,
    textAlign: "right",
    fontWeight: "bold",
  },
  boxImage: {
    width: "100%",
    height: "70%",
    borderRadius: 9,
    top: -10,
    resizeMode: "cover",
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default SearchPage;
