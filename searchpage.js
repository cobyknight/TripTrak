import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

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
  const handleCategoryPress = (category) => {
    // If the selected category is pressed again, reset the filter
    setSelectedCategory(selectedCategory === category ? null : category);
  };
  

  const navigation = useNavigation();
  const goToLocation = (index) => {
    const selectedLocation = filteredLocations[index];
    const screenToNavigate = selectedLocation.goTo || "SearchPage"; // Default to a screen named "SearchPage" if goTo is not specified
    navigation.navigate(screenToNavigate);
  };

   const locations = [
    {
      name: "Highland Coffees",
      image: require("./assets/places/highland_coffees.png"),
      rating: 4.5,
      price: "$",
      category: "Cafe",
      goTo: "HighlandCoffeesPage",
    },
    {
      name: "Roul's Deli",
      image: require("./assets/places/rouls_deli.png"),
      rating: 4.4,
      price: "$",
      category: "Burger",
      goTo: "RoulsDeliPage",
    },
    {
      name: "The Chimes",
      image: require("./assets/places/chimes.png"),
      rating: 4.3,
      price: "$$",
      category: ["Cajun", " | ", "Dining"],
      goTo: "TheChimesPage",
    },
    {
      name: "City Slice Pizza and Pints",
      image: require("./assets/places/city_slice.png"),
      rating: 4.3,
      price: "$$$",
      category: ["Pizza", " | ", "Dining", " | ", "Bar"],
      goTo: "CitySlicePage",
    },
    {
      name: "Tio Javi's Fresh Mex Bar & Grill",
      image: require("./assets/places/tio_javis.png"),
      rating: 4.2,
      price: "$$",
      category: ["Mexican"," | ", "Dining", " | ", "Bar"],
      goTo: "TioJavisPage",
    },
    {
      name: "Olive or Twist",
      image: require("./assets/places/olive_or_twist.png"),
      rating: 4.1,
      price: "$$",
      category: ["Dining"," | ", "Bar"],
      goTo: "OliveOrTwistPage",
    },
  ];

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
    
      <View style={styles.searchBarContainer}>
        <FontAwesome name="search" size={20} color="white" style={styles.icon} />
        <TextInput style={{  marginHorizontal: 10, color: 'white', fontWeight: 'bold',}} placeholder="Current Location: Baton Rouge" placeholderTextColor="white" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollBarContainer} horizontal={true}>
        <CategoryButton
          category="Cafe"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        <CategoryButton
          category="Burger"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        <CategoryButton
          category="Pizza"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        <CategoryButton
          category="Dining"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
        <CategoryButton
          category="Bar"
          selectedCategory={selectedCategory}
          onPress={handleCategoryPress}
        />
      </ScrollView>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {filteredLocations.map((location, index) => (
          <Pressable key={index} style={({ pressed }) => [styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945" }]} onPress={() => goToLocation(index)} android_ripple={{ color: "#b3b3b3", borderless: true }} >
            <Image source={location.image} style={styles.boxImage} />
            <Text style={styles.boxText}>
              <Text style={{ color: 'white' }}>{location.name}</Text>{'\n'}
              <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
              <Text style={{ color: 'white' }}>{location.rating}</Text>
              <Text style={{ color: '#FFA500' }}> ★</Text>
              <Text style={{ color: 'white' }}> ⋅</Text>
              <Text style={{ color: '#008080' }}> {location.price}</Text>
              <Text style={{color: 'white'}}> ⋅ {location.category}</Text>
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: -1,
  },
  icon1: {
    marginTop: -180,
    marginStart: 300,
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
    marginBottom: 20,
  },
  scrollBox:{
    width: 100,
    height: 30,
    backgroundColor: "#323945",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    marginStart: 8,
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
});

export default SearchPage;
