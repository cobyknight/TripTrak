import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, TextInput } from "react-native";
import { Border, Color, FontSize, FontFamily } from "./GlobalStyles";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const SearchPageRestaurant = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handlePress = () => {
    navigation.navigate("HighlandCoffeesPage"); // Navigate to the 'Restaurant' screen
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarText}
          placeholder="Destination: Baton Rouge"
          placeholderTextColor="#000000"
        />
      </View>
      
      <View style={styles.searchPageRestaurant}>

        {/* Each restaurant item */}
        
        <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <Pressable
          style={[styles.rectangleParent, styles.rectangleParentLayout]}
          onPress={handlePress} // Use the handlePress function
        >
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.text1, styles.textTypo]}>$</Text>
          <Text style={[styles.tioJavisFresh1, styles.tioTypo]}>Highland Coffees</Text>
          <View style={[styles.stars, styles.starsFlexBox]}>
            <Image
              style={styles.starIconLayout}
              resizeMode="cover"
              source={require('./assets/4.5_star.png')}
            />
          </View>
          <Image
            style={styles.groupItemPosition}
            resizeMode="cover"
            source={require('./assets/highland_coffees.png')}
          />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.text2, styles.textTypo]}>$$$</Text>
          <Text
            style={[styles.tioJavisFresh1, styles.tioTypo]}
          >{`City Slice Pizza and Pints
  `}</Text>
          <View style={[styles.stars, styles.starsFlexBox]}>
            <Image
              style={styles.starIconLayout}
              resizeMode="cover"
              source={require("./assets/4_star.png")}
            />
          </View>
          <Image
            style={styles.groupItemPosition}
            resizeMode="cover"
            source={require("./assets/city_slice.png")}
          />
        </View>
        <View style={[styles.groupView, styles.rectangleParentLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>$$</Text>
          <Text style={[styles.tioJavisFresh1, styles.tioTypo]}>{`The Chimes
  `}</Text>
          <View style={[styles.stars, styles.starsFlexBox]}>
            <Image
              style={styles.starIconLayout}
              resizeMode="cover"
              source={require("./assets/4.5_star.png")}
            />
          </View>
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            resizeMode="cover"
            source={require("./assets/chimes.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text
            style={[styles.tioJavisFresh4, styles.tioTypo]}
          >{`Tio Javi's Bar & Grill
  `}</Text>
          <View style={[styles.stars, styles.starsFlexBox]}>
            <Image
              style={styles.starIconLayout}
              resizeMode="cover"
              source={require("./assets/4.5_star.png")}
            />
          </View>
          <Image
            style={[styles.groupItem, styles.groupItemPosition]}
            resizeMode="cover"
            source={require("./assets/tio_javis.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>$$</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.text, styles.textTypo]}>$$</Text>
          <Text style={[styles.tioJavisFresh1, styles.tioTypo]}>{`Olive or Twist
  `}</Text>
          <View style={[styles.stars, styles.starsFlexBox]}>
            <Image
              style={styles.starIconLayout}
              resizeMode="cover"
              source={require("./assets/4_star.png")}
            />
          </View>
          <Image
            style={styles.groupItemPosition}
            resizeMode="cover"
            source={require("./assets/olive_twist.png")}
          />
        </View>
        <Text
          style={[styles.dontSeeYour, styles.emailUsATypo]}
        >{`Don't see your business or want to advertise? 
  `}</Text>
        <Pressable
          style={[styles.emailUsARequestWrapper, styles.starsFlexBox]}
          onPress={() => {}}
        >
          <Text style={[styles.emailUsA, styles.emailUsATypo]}>
            Email us a request!
          </Text>
        </Pressable>
        <View
          style={[styles.searchPageRestaurantChild3, styles.searchChildLayout]}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleParentLayout: {
    height: 94,
    width: 341,
    left:"50%",
    marginLeft: -180,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    height: 100,
    width: 360,
    position: "absolute",
  },
  batonRougeLaFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  starsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  starIconLayout: {
    height: 13,
    width: 90,
  },
  textTypo: {
    height: 20,
    width: 160,
    left: 115,
    top: 58,
    //fontSize: FontSize.size_mini,
    textAlign: "left",
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupItemPosition: {
    height: 75,
    width: 90,
    left: 6,
    top: 10,
    position: "absolute",
  },
  tioTypo: {
    //fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 14,
    position: "absolute",
  },
  searchChildLayout1: {
    height: 13,
    left: 341,
    width: 15,
    position: "absolute",
  },
  emailUsATypo: {
    //fontSize: FontSize.size_xs,
    textAlign: "left",
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  searchChildLayout: {
    width: 390,
    left: 0,
  },
  lineIconLayout: {
    height: 2,
    position: "absolute",
  },
  streamlinehqLayout: {
    height: 70,
    width: 70,
    top: 5,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIconPosition: {
    top: "11%",
    position: "absolute",
  },
  groupChild8Layout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  searchTypo: {
    top: "60.92%",
    //fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#d9d9d9",
  },
  tioJavisFresh: {
    fontSize: 13,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: 112,
    top: 14,
  },
  starIcon1: {
    marginLeft: 4.94,
  },
  stars: {
    top: 41,
    borderRadius: Border.br_11xl,
    left: 113,
  },
  text: {
    color: Color.colorOrangered,
  },
  groupItem: {
    borderRadius: Border.br_11xl,
  },
  rectangleParent: {
    top: 30,
  },
  groupInner: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  text1: {
    color: Color.colorDarkcyan,
  },
  tioJavisFresh1: {
    left: 112,
  },
  text2: {
    color: "#ff0022",
  },
  rectangleContainer: {
    top: 360,
  },
  groupView: {
    top: 250,
  },
  tioJavisFresh4: {
    left: 113,
  },
  rectangleParent1: {
    top: 140,
  },
  rectangleParent2: {
    top: 470,
  },
  searchPageRestaurantChild: {
    top: 647,
  },
  searchPageRestaurantItem: {
    top: 523,
  },
  searchPageRestaurantInner: {
    top: 408,
  },
  vectorIcon: {
    top: 766,
  },
  searchPageRestaurantChild1: {
    top: 292,
  },
  dontSeeYour: {
    top: 650,
    left: 28,
    width: 339,
    height: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  emailUsA: {
    color: Color.colorDarkcyan,
  },
  emailUsARequestWrapper: {
    top: 670,
    left: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  searchPageRestaurantChild2: {
    top: 768,
  },
  lineIcon: {
    top: 50,
    left: 46,
    width: 296,
  },
  ellipseIcon: {
    left: 100,
  },
  searchPageRestaurantChild4: {
    left: 229,
  },
  icon: {
    overflow: "hidden",
  },
  streamlinehqNatureEcologyWo: {
    left: "50%",
    marginLeft: -176,
  },
  streamlinehqFoodKitchenwareIcon: {
    left: 114,
    overflow: "hidden",
  },
  searchPageRestaurantChild5: {
    height: "4.78%",
    width: "72.05%",
    top: "9.93%",
    right: "11.54%",
    bottom: "85.29%",
    left: "16.41%",
    borderRadius: 10,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    position: "absolute",
  },
  groupIcon: {
    height: "2.29%",
    width: "6.15%",
    right: "72.82%",
    bottom: "86.53%",
    left: "21.03%",
    top: "11.17%",
    position: "absolute",
  },
  batonRougeLa: {
    height: "2.67%",
    width: "53.08%",
    left: "30%",
    //fontSize: FontSize.size_base,
    //fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  findYourNext: {
    height: "3.72%",
    width: "65.64%",
    top: "4.49%",
    left: "20.77%",
    fontSize: 26,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  groupChild8: {
    backgroundColor: "#f6f6f6",
    top: 0,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  streamlinehqTravelMapLocati: {
    left: "78.46%",
    right: "9.23%",
  },
  vectorIcon1: {
    width: 39,
    height: 46,
  },
  streamlinehqTravelMapLocati1: {
    height: "54.84%",
    width: "12.56%",
    top: "8.21%",
    right: "43.97%",
    bottom: "36.95%",
    left: "43.46%",
    paddingHorizontal: 5,
    paddingVertical: 1,
    overflow: "hidden",
  },
  streamlinehqTravelMapLocatiIcon: {
    right: "78.46%",
    left: "9.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  search: {
    left: "10%",
  },
  profile: {
    left: "79.49%",
  },
  favorites: {
    left: "42.31%",
  },
  rectangleParent3: {
    top: 757,
  },
  searchPageRestaurantChild6: {
    top: 755,
    width: 390,
    left: 0,
  },
  searchPageRestaurant: {
    flex: 1,
    height: 1047,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  currentDestinationText: {
    textAlign: "center",
    //fontSize: FontSize.size_base,
    //fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    marginTop: 23,
    marginBottom: 20,
    left: 15,
  },
  rankText: {
    //fontSize: FontSize.size_mini,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    left: 6, // Adjust as needed for proper alignment
    top: 14, // Adjust as needed for proper alignment
  },
  searchBar: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  searchBarText: {
    width: 300,
    padding: 10,
    borderRadius: 20,  // Adjust the borderRadius as needed
    backgroundColor: "#ffffff",
    marginBottom: 10,
    //fontSize: FontSize.size_base,
    //fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: 'center', // Center the text
    marginTop: 37, // Adjust the marginTop to lower the text
  },
});

export default SearchPageRestaurant;
