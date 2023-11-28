import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Dimensions, FlatList, StyleSheet, View, Text, Image, Pressable, ScrollView, SafeAreaView, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const TheChimesPage = () => {
  const navigation = useNavigation();
  const goBackAPage = () => {
    navigation.goBack("SearchPage");
  };

  const flatListRef = useRef();
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect( () => {

    let interval = setInterval( () => {
      if(activeIndex === images.length-1)
      {
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        }, []);
      }
      else
      {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        }, []);
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const images = [
    { id: "01", image: require("./assets/highland_coffees_photos/p1.jpg") },
    { id: "02", image: require("./assets/highland_coffees_photos/p2.jpg") },
    { id: "03", image: require("./assets/highland_coffees_photos/p3.jpg") },
    { id: "04", image: require("./assets/highland_coffees_photos/p4.jpg") },
    { id: "05", image: require("./assets/highland_coffees_photos/p5.jpg") },
    { id: "06", image: require("./assets/highland_coffees_photos/p6.jpg") },
    { id: "07", image: require("./assets/highland_coffees_photos/p7.jpg") },
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={item.image} style={{height: 200, width: screenWidth,}} />
      </View>
    )
  };

  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const expandAbout = () => {
    setIsAboutExpanded(!isAboutExpanded);
  };

  const [isReview1Expanded, setIsReview1Expanded] = useState(false);
  const expandReview1 = () => {
    setIsReview1Expanded(!isReview1Expanded);
  }
  
  const [isReview2Expanded, setIsReview2Expanded] = useState(false);
  const expandReview2 = () => {
    setIsReview2Expanded(!isReview2Expanded);
  }

  const [isReview3Expanded, setIsReview3Expanded] = useState(false);
  const expandReview3 = () => {
    setIsReview3Expanded(!isReview3Expanded);
  }

  const goToWebsite = () => {
    // Handle link press (e.g., open a web page)
    Linking.openURL('https://www.highlandcoffeesbr.com');
  };

  const goToYelp = () => {
    Linking.openURL('https://www.yelp.com/biz/highland-coffees-baton-rouge');
  }

  const goToGoogleMaps = () => {
    Linking.openURL('https://maps.app.goo.gl/F8ASf8UipEDtNiw86');
  }

  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle the state
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Pressable onPress={goBackAPage}>
          <FontAwesome name="arrow-left" size={20} color="white" style={{ padding: 10,  }} />
        </Pressable>
        <TouchableOpacity onPress={handlePress}>
          <FontAwesome name="heart" size={20} color={isPressed ? 'gray' : 'white'} style={{ padding: 10 }} />
        </TouchableOpacity>
        
      </View>

      <ScrollView>
        <FlatList data={images} ref={flatListRef} getItemLayout={getItemLayout} renderItem={renderItem} keyExtractor={(item)=>item.id} horizontal={true} pagingEnabled={true} onScroll={handleScroll}/>
        <Text style={styles.title}>Highland Coffees</Text>

        <View style={ styles.reviewTop }>
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star-half-full" size={20} color="#FFA500" />
          <Text style={styles.review}>4.5 (130 Reviews) </Text>
        </View>

        <Text style={styles.priceAndType}>$ ⋅ Cafe</Text>
        
        <Text style={styles.otherTitles}>About</Text>
        <TouchableWithoutFeedback onPress={expandAbout}>
          <Text numberOfLines={isAboutExpanded ? 0 : 2} style={styles.about}>Specialty coffee shop serving delicious coffee and pasteries at the gates of LSU since 1989 with coffee roasting in-shop and lots of seating inside and in the courtyard.</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.other} onPress={goToWebsite}>Visit Website</Text>

        <Text style={styles.otherTitles}>Address</Text>
        <Text style={styles.other} onPress={goToGoogleMaps}>3350 Highland Road{'\n'}Baton Rouge, LA</Text>

        <Text style={styles.otherTitles}>Reviews</Text>
        <View style={styles.line} />
        <View style={styles.reviewContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/highland_coffees_photos/person.jpg')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hong-an T.</Text>
            <Text style={styles.locationText}>Baton Rouge, LA</Text>
            <View style={styles.reviewCommentRating}>
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={expandReview1}>
          <Text numberOfLines={isReview1Expanded ? 0 : 2} style={styles.reviewComment}>The service here was super friendly! This was my first time going to this coffee house and I was genuinely surprised! They had so many options for the iced teas from the usual places that I go to so I had no idea what to choose so the staff helped me choose one! I ended up going with the Yerba mate tea which is very good. It's not too strong in terms of taste which I enjoy. The atmosphere is very nice but it is a bit loud if you are trying to study in my opinion. But it is a great place to go if you are catching up with friends or doing light work. They have so many options in terms of drips and other drinks that I am excited to try next time I come! I also really love their outside seating, if it was wasn't so hot I would definitely sit out there! They had many chargers among the walls too which is a good plus.</Text>
        </TouchableWithoutFeedback>
        <View style={styles.line}/>

        <View style={styles.reviewContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/highland_coffees_photos/person2.png')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Mya H.</Text>
            <Text style={styles.locationText}>Braintree, MA</Text>
            <View style={styles.reviewCommentRating}>
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={expandReview2}>
          <Text numberOfLines={isReview2Expanded ? 0 : 2} style={styles.reviewComment}>great coffee, customer service and atmosphere! Not too far from my dorm which is great. Usually get an iced mocha with oat milk, very consistent with taste and is amazing.</Text>
        </TouchableWithoutFeedback>
        <View style={styles.line}/>

        <View style={styles.reviewContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/highland_coffees_photos/person3.jpg')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Ruth D.</Text>
            <Text style={styles.locationText}>Washington, DC</Text>
            <View style={styles.reviewCommentRating}>
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star" size={15} color="#FFA500" />
              <FontAwesome name="star-o" size={15} color="#FFA500" />
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={expandReview3}>
          <Text numberOfLines={isReview3Expanded ? 0 : 2} style={styles.reviewComment}>If you want a local coffee shop, you've found it here at Highland Coffees. Recent orders that I've had are lavender matcha latte, blended matcha, chai tea latte, and dirty vanilla chai tea latte (which means espresso was added). They've all tasted pretty good. They have a lot of different syrup flavors to customize your drinks. And they have pastries and bagels.{'\n'}{'\n'}The staff is very friendly and kind. The shop has a very chill vibe. Lots of locals, regulars, and students come here to chill, study, or chat. There's a lot of indoor and outdoor seating. The shop has a retail area to buy coffee, teas, mugs, and more.{'\n'}{'\n'}This will be a 4 start review instead of 5 because sometimes the service can be a bit slow. And some drinks are made in an area that is hidden from customers. Most coffee shops I've been to are typically completely transparent when making beverages. The shop could use a physical update and more modern look. Full transparency, the first time I went I did not like the iced almond latte or the pastry I ordered. It took me over a year to return but I've been back a few times and enjoyed it.</Text>
        </TouchableWithoutFeedback>
        <View style={styles.line}/>
        
        <Text style={styles.other} onPress={goToYelp}>More Reviews{'\n'}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 5,
  },
  otherTitles: {
    color: 'white',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  reviewTop :{
    flexDirection: 'row', 
    justifyContent: 'center',
    marginVertical: 15,
  },
  review: {
    color: 'white',
    textAlign: "center",
    fontSize: 15,
    marginVertical: -1,
  },
  about: {
    marginHorizontal: 18,
    color: 'white',
    textAlign: "center",
    fontSize: 15,
    marginVertical: 5,
  },
  priceAndType: {
    color: 'white',
    textAlign: "center",
    fontSize: 15,
    top: -10,
  },
  other: {
    marginHorizontal: 10,
    color: 'white',
    textAlign: "center",
    fontSize: 15,
    marginVertical: 5,
    fontStyle: 'italic',
    textDecorationLine: 'underline',

  },
  reviewComment: {
    marginHorizontal: 10,
    marginStart: 40,
    marginEnd: 40,
    color: 'white',
    textAlign: "left",
    fontSize: 15,
  },
  reviewCommentRating: {
    flexDirection: 'row', 
    justifyContent: 'left',
    marginVertical: 3,
  },
  line: {
    height: 1,
    width: '80%',
    backgroundColor: 'gray',
    marginVertical: 15,
    alignSelf: 'center'
  },
  reviewContainer: {
    flexDirection: 'row',
    marginStart: 40, 
  },
  imageContainer: {
    marginRight: 5,
    marginBottom: 20, 
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, 
  },
  text: {
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'column',
  },
  locationText: {
    color: 'white',
  },
  
});

export default TheChimesPage;
