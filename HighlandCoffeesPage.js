import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Dimensions, FlatList, StyleSheet, View, Text, Image, Pressable, ScrollView, SafeAreaView, Linking,  Modal, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const HighlandCoffeesPage = () => {
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

  const ViewMapButton = () => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goToGoogleMaps} style={styles.mapButton}>
        <View style={styles.buttonContent}>
          <Image source={require('./assets/search.png')} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.buttonText}>View Map</Text>
    </View>
  );

  const WebsiteButton = () => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goToWebsite} style={styles.websiteButton}>
        <View style={styles.buttonContent}>
          <Image source={require('./assets/place.png')} style={styles.buttonIcon} />
        </View>
        </TouchableOpacity>
        <Text style={styles.buttonText}>      Website</Text>
    </View>
  );

  const [isReviewModalVisible, setReviewModalVisible] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const toggleReviewModal = () => {
    setReviewModalVisible(!isReviewModalVisible);
  };

  const submitReview = () => {
    // Add logic to handle the submission of the review (e.g., send to a server)
    // You can use `selectedStars` and `reviewText` to send the data
    // Reset the state and close the modal after submission
    setSelectedStars(0);
    setReviewText("");
    toggleReviewModal();
  };

  const localsFavorites = [
    { image: require("./assets/coldbrew.jpg"), description: "Cold Brew Coffee" },
    { image: require("./assets/espresso.jpg"), description: "Espresso" },
    { image: require("./assets/greentea.jpg"), description: "Green Tea" },
    { image: require("./assets/icedvanillalatte.jpg"), description: "Iced Vanilla Latte" },
    { image: require("./assets/passionfruittea.jpg"), description: "Passion Fruit Tea" },
  ];
  

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
          <Text style={styles.review}>4.5 (130 Reviews)      $ ⋅ Cafe </Text>
        </View>
      
      <View style={styles.buttonsContainer}>
        <ViewMapButton />
        <WebsiteButton />
      </View>
      
<View style={styles.horizontalBar} />

<View style={styles.reviewSection}>
  <Text style={styles.leaveReviewText}>Leave a review!</Text>
  <View style={styles.starContainer}>
    {[1, 2, 3, 4, 5].map((index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
        setSelectedStars(index);
        toggleReviewModal();
        }}
        style={styles.starButton}
      >
        {index <= selectedStars ? (
          <FontAwesome name="star" size={30} color="gold" />
        ) : (
          <FontAwesome name="star-o" size={30} color="gold" />
        )}
      </TouchableOpacity>
    ))}
  </View>

  {/* Add the review modal */}
  <Modal
  visible={isReviewModalVisible}
  transparent={true}
  animationType="slide"
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContentContainer}>
      {/* Your modal content goes here */}
      <TouchableOpacity onPress={toggleReviewModal} style={styles.closeButton}>
        <FontAwesome name="times" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.selectedStarsContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedStars(index)}
            style={styles.starButton}
          >
            {index <= selectedStars ? (
              <FontAwesome name="star" size={30} color="gold" />
            ) : (
              <FontAwesome name="star-o" size={30} color="gold" />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        value={reviewText}
        onChangeText={(text) => setReviewText(text)}
        placeholder="Write your review here..."
        multiline={true}
        style={styles.reviewInput}
      />
      <TouchableOpacity onPress={submitReview} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
  </View>

  <View style={styles.horizontalBar} />

  <View>
  <Text style={styles.otherTitles}>Locals Favorites!</Text>
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.localsFavoritesContainer}
  >
    {localsFavorites.map((item, index) => (
      <View key={index} style={styles.localsFavoriteItem}>
        <Image source={item.image} style={styles.localsFavoriteImage} />
        <Text style={styles.localsFavoriteText}>{item.description}</Text>
      </View>
    ))}
  </ScrollView>
</View>


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
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 5,
    marginLeft: 30,
  },
  otherTitles: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 30,
  },
  reviewTop :{
    flexDirection: 'row', 
    marginVertical: 10,
    marginLeft: 30,
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
    fontSize: 15,
    marginVertical: 10,
    marginLeft: 290,
  },
  other: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
    marginVertical: 5,
    marginLeft: 30,
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
  mapButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    marginVertical: 5,
    marginRight: 20,
    alignItems: 'center',
  },
  websiteButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    marginVertical: 5,
    marginLeft: 20,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
    fontSize: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  reviewSection: {
    marginVertical: 15,
    marginLeft:30
  },
  leaveReviewText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    marginRight: 170,
  },
  starContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  starButton: {
    marginHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalContentContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    width: '90%', // Adjust the width as needed
    height: 300, // Adjust the height as needed
  },

  reviewInput: {
    height: 150,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 15,
    padding: 10,
    width: '100%', // Adjust the width as needed
  },
  submitButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
   selectedStarsText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  selectedStarsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  starButton: {
    marginRight: 5,
  },
  otherTitles: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 30,
  },

  localsFavoritesContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },

  horizontalBar: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginVertical: 15,
  },

  localsFavoriteItem: {
    marginRight: 10,
    alignItems: 'center',
  },

  localsFavoriteImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },

  localsFavoriteText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HighlandCoffeesPage;
