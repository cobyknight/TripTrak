import React, { useState } from 'react';
import {Image, StyleSheet, View, Text, Pressable, TouchableOpacity} from "react-native";
import { Color, Border, FontSize } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import searchpage from "./searchpage";

const HighlandCoffeesPage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack("Search"); // Navigate to the 'search page' screen
  };

  const [isImageOne, setIsImageOne] = useState(true);

  const handleButton = () => {
    // Toggle the state when the button is pressed
    setIsImageOne(!isImageOne);
  };

  return (
    <View style={[styles.highlandCoffeesPage, styles.icon1Layout]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("./assets/background.png")}
      />
      <View style={styles.highlandCoffeesPageChild} />
      <Text style={[styles.theAtmosphereWas, styles.gotACoffeeTypo]}>
        Atmosphere was great! Roomy and calm.
      </Text>
      <Text style={[styles.gotACoffee, styles.gotACoffeeTypo]}>
        Got a coffee, and it was tasty but weak.
      </Text>
      <Text style={[styles.highlandRdBatonContainer, styles.highlandTypo]}>
        <Text
          style={styles.highlandRdBaton}
        >{`3550 Highland Rd, Baton Rouge, LA 70802`}</Text>
      </Text>
      <Text style={[styles.reviews, styles.reviewsTypo]}>Reviews</Text>
      <Text style={[styles.about, styles.aboutTypo]}>About</Text>
      <Text style={[styles.photos, styles.aboutTypo]}>Photos</Text>
      <Text style={[styles.address, styles.reviewsTypo]}>Address</Text>
      <Text style={[styles.highlandCoffeesOffers, styles.highlandTypo]}>
        Highland Coffees offers distinctive coffees roasted right in the shop,
        fine loose teas, exquisite pastries, tasty specialty drinks, and
        attractive retail items designed with customer enjoyment as its focus.
      </Text>
      <Text style={[styles.greatAndRelatively, styles.gotACoffeeTypo]}>
        Great and relatively inexpensive coffee!
      </Text>
      <Text style={[styles.text2, styles.text2Clr]}>+10</Text>
      <View style={[styles.stars, styles.starsFlexBox]}>
        <Image
          style={styles.starIconLayout}
          resizeMode="cover"
          source={require("./assets/5_star.png")}
        />
      </View>
      <View style={[styles.stars1, styles.starsFlexBox]}>
        <Image
          style={styles.starIconLayout}
          resizeMode="cover"
          source={require("./assets/4_star.png")}
        />
      </View>
      <View style={[styles.stars2, styles.starsFlexBox]}>
        <Image
          style={[styles.starIconLayout]}
          resizeMode="cover"
          source={require("./assets/4.5_star.png")}
        />
      </View>
      <Text style={[styles.highlandCoffees, styles.text2Clr]}>
        Highland Coffees
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleParentLayout]}
        onPress={handlePress}
      >
        <Image
          source={require("./assets/left_arrow.png")}
          style={{ width: 60, height: 60, left: 20, top: 50 }}
        />
      </Pressable>
      <TouchableOpacity onPress={handleButton}>
        <Image
          source={
            isImageOne
              ? require("./assets/heart.png")
              : require("./assets/heart_unselected.png")
          }
          style={styles.highlandCoffeesPageItem}
        />
      </TouchableOpacity>

      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("./assets/Photo1.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("./assets/Photo2.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          resizeMode="cover"
          source={require("./assets/Photo3.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.groupLayout]}
          resizeMode="cover"
          source={require("./assets/Photo4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1Layout: {
    overflow: "hidden",
    width: "100%",
  },
  gotACoffeeTypo: {
    height: 25,
    width: 338,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  highlandTypo: {
    width: 338,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    left: 23,
    position: "absolute",
  },
  reviewsTypo: {
    height: 36,
    width: 117,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    left: 23,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  aboutTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    left: 23,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text2Clr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  starsFlexBox: {
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  starIconLayout: {
    height: 14,
    width: 92,
  },
  groupLayout: {
    width: 63,
    borderRadius: Border.br_8xs,
    height: 64,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: 382,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  highlandCoffeesPageChild: {
    top: 350,
    height: 508,
    borderRadius: Border.br_11xl,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  theAtmosphereWas: {
    top: 785,
    left: 21,
  },
  gotACoffee: {
    top: 740,
    left: 23,
  },
  text: {
    
  },
  highlandRdBaton: {
    
  },
  highlandRdBatonContainer: {
    top: 635,
    height: 19,
    left: 23,
  },
  reviews: {
    top: 658,
  },
  about: {
    top: 367,
    width: 345,
    height: 55,
  },
  photos: {
    top: 487,
  },
  address: {
    top: 600,
  },
  highlandCoffeesOffers: {
    top: 400,
    height: 84,
    left: 23,
    
  },
  greatAndRelatively: {
    top: 695,
    left: 23,
  },
  text2: {
    top: 544,
    left: 274,
    width: 73,
    height: 27,
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    
  },
  starIcon1: {
    marginLeft: 4.94,
  },
  stars: {
    top: 713,
    left: 23,
  },
  stars1: {
    top: 758,
    left: 23,
  },
  stars2: {
    top: 803,
    left: 21,
  },
  highlandCoffees: {
    top: 254,
    left: 45,
    fontSize: 30,
    fontWeight: "800",
    //fontFamily: FontFamily.poppinsExtraBold,
    width: 1000,
    height: 43,
  },
  icon1: {
    height: "100%",
  },
  arrowLeft1: {
    top: 47,
    width: 61,
    height: 56,
    left: 23,
    position: "absolute",
  },
  highlandCoffeesPageItem: {
    top: 5,
    left: 321,
    width: 33.75,
    height: 29.25,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_8xs,
  },
  groupItem: {
    left: 81,
  },
  groupInner: {
    left: 162,
  },
  rectangleIcon: {
    left: 243,
  },
  vectorParent: {
    top: 526,
    left: 28,
    width: 306,
    height: 64,
    position: "absolute",
  },
  highlandCoffeesPage: {
    flex: 1,
    height: 844,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default HighlandCoffeesPage;
