import React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const SearchPage = () => {
  const navigation = useNavigation();
  const goToHighlandCoffees = () => {
    navigation.navigate("HighlandCoffeesPage");
  };
  const tempPressLocation = () => {

  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>
      <View style={styles.searchBarContainer}>
        <FontAwesome name="search" size={20} color="white" style={styles.icon} />
        <TextInput style={{ marginHorizontal: 10, color: 'white'}} placeholder="Search Your Destination" placeholderTextColor="gray" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollBarContainer} horizontal={true}>

        <Pressable style={({ pressed }) => [ styles.scrollBox, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Text style={styles.scrollBoxText}>Dining</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [ styles.scrollBox, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Text style={styles.scrollBoxText}>Bar</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [ styles.scrollBox, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Text style={styles.scrollBoxText}>Cafe</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [ styles.scrollBox, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Text style={styles.scrollBoxText}>Pizza</Text>
        </Pressable>
        
        <Pressable style={({ pressed }) => [ styles.scrollBox, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Text style={styles.scrollBoxText}>Burger</Text>
        </Pressable>
      </ScrollView>

      <ScrollView contentContainerStyle={styles.contentContainer}>

        <Pressable style={({ pressed }) => [ styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={goToHighlandCoffees} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Image source={require("./assets/places/highland_coffees.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>
            <Text style={{ color: 'white' }}>Highland Coffees</Text>{'\n'}
            <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
            <Text style={{ color: 'white', }}>4.5</Text>
            <Text style={{ color: '#FFA500' }}> ★</Text>
            <Text style={{ color: 'white' }}> ⋅</Text>
            <Text style={{ color: '#008080' }}> $</Text>
            <Text style={{color: 'white'}}> ⋅ Cafe </Text>
          </Text>
          <FontAwesome name="heart" size={30} color="white" style={styles.icon1} />
          <Text style={styles.ranking}>
            <Text style={{ color: 'gold', fontSize: 30 }}>1</Text>
          </Text>
          
        </Pressable>

        <Pressable style={({ pressed }) => [ styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Image source={require("./assets/places/rouls_deli.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>
            <Text style={{ color: 'white' }}>Roul's Deli</Text>{'\n'}
            <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
            <Text style={{ color: 'white' }}>4.3</Text>
            <Text style={{ color: '#FFA500' }}> ★</Text>
            <Text style={{ color: 'white' }}> ⋅</Text>
            <Text style={{ color: '#008080' }}> $</Text>
            <Text style={{color: 'white'}}> ⋅ Burger</Text>
          </Text>
          <FontAwesome name="heart" size={30} color="white" style={styles.icon1} />
          <Text style={styles.ranking}>
            <Text style={{ color: 'silver', fontSize: 30 }}>2</Text>
          </Text>
        </Pressable>

        <Pressable style={({ pressed }) => [ styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Image source={require("./assets/places/chimes.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>
            <Text style={{ color: 'white' }}>The Chimes</Text>{'\n'}
            <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
            <Text style={{ color: 'white' }}>4.2</Text>
            <Text style={{ color: '#FFA500' }}> ★</Text>
            <Text style={{ color: 'white' }}> ⋅</Text>
            <Text style={{ color: '#FF6600' }}> $$</Text>
            <Text style={{color: 'white'}}> ⋅ Cajun | Dining</Text>
          </Text>
          <FontAwesome name="heart-o" size={30} color="white" style={styles.icon1} />
          <Text style={styles.ranking}>
            <Text style={{ color: 'brown', fontSize: 30 }}>3</Text>
          </Text>
        </Pressable>

        <Pressable style={({ pressed }) => [ styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Image source={require("./assets/places/city_slice.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>
            <Text style={{ color: 'white' }}>City Slice Pizza and Pints</Text>{'\n'}
            <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
            <Text style={{ color: 'white' }}>4.3</Text>
            <Text style={{ color: '#FFA500' }}> ★</Text>
            <Text style={{ color: 'white' }}> ⋅</Text>
            <Text style={{ color: '#FF0032' }}> $$$</Text>
            <Text style={{color: 'white'}}> ⋅ Pizza | Bar | Dining</Text>
          </Text>
          <FontAwesome name="heart-o" size={30} color="white" style={styles.icon1} />
        </Pressable>
        
        <Pressable style={({ pressed }) => [ styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Image source={require("./assets/places/tio_javis.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>
            <Text style={{ color: 'white' }}>Tio Javi's Fresh Mex Bar & Grill</Text>{'\n'}
            <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
            <Text style={{ color: 'white' }}>4.2</Text>
            <Text style={{ color: '#FFA500' }}> ★</Text>
            <Text style={{ color: 'white' }}> ⋅</Text>
            <Text style={{ color: '#FF6600' }}> $$</Text>
            <Text style={{color: 'white'}}> ⋅ Mexican | Dining | Bar</Text>
          </Text>
          <FontAwesome name="heart" size={30} color="white" style={styles.icon1} />
        </Pressable>

        <Pressable style={({ pressed }) => [ styles.box, { backgroundColor: pressed ? "#4b5669" : "#323945", }, ]} onPress={tempPressLocation} android_ripple={{ color: "#b3b3b3", borderless: true }}>
          <Image source={require("./assets/places/olive_or_twist.png")} style={styles.boxImage} />
          <Text style={styles.boxText}>
            <Text style={{ color: 'white' }}>Olive or Twist</Text>{'\n'}
            <Text style={{ color: 'white', fontSize: 4, }}> </Text>{'\n'}
            <Text style={{ color: 'white' }}>4.1</Text>
            <Text style={{ color: '#FFA500' }}> ★</Text>
            <Text style={{ color: 'white' }}> ⋅</Text>
            <Text style={{ color: '#FF6600' }}> $$</Text>
            <Text style={{color: 'white'}}> ⋅ Dining | Bar </Text>
          </Text>
          <FontAwesome name="heart-o" size={30} color="white" style={styles.icon1} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    marginBottom: 10,
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
});

export default SearchPage;
