import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, Dimensions, FlatList, StyleSheet, View, Text, Image, Pressable, ScrollView, SafeAreaView, Linking,  Modal, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import TripTrakLogo from "./assets/TripTrak_Logo.png";

const OliveorTwistPage = () => {
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
    { id: "01", image: require("./assets/OliveorTwistPhotos/oliveoutsidenight.jpg") },
    { id: "02", image: require("./assets/OliveorTwistPhotos/olivebar2.jpg") },
    { id: "03", image: require("./assets/OliveorTwistPhotos/olivebar.jpg") },
    { id: "04", image: require("./assets/OliveorTwistPhotos/wall.jpg") },
    { id: "05", image: require("./assets/OliveorTwistPhotos/draftwall.jpg") },
    { id: "06", image: require("./assets/OliveorTwistPhotos/oliveinside.jpg") },
    { id: "07", image: require("./assets/OliveorTwistPhotos/beerimage.jpg") },
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
    Linking.openURL('https://www.oliveortwistbr.com/');
  };

  const goToYelp = () => {
    Linking.openURL('https://www.yelp.com/biz/olive-or-twist-baton-rouge');
  }

  const goToGoogleMaps = () => {
    Linking.openURL('https://maps.app.goo.gl/F8ASf8UipEDtNiw86');
  }

  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle the state
  };

  const ViewMapButton = React.memo(() => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goToGoogleMaps} style={styles.mapButton}>
        <View style={styles.buttonContent}>
          <FontAwesome name="map" size={30} color="black" />
        </View>
      </TouchableOpacity>
      <Text style={styles.buttonText}>View Map</Text>
    </View>
  ));
  
  const WebsiteButton = React.memo(() => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goToWebsite} style={styles.websiteButton}>
        <View style={styles.buttonContent}>
          <FontAwesome name="globe" size={30} color="black" />
        </View>
      </TouchableOpacity>
      <Text style={styles.buttonText}>      Website</Text>
    </View>
  ));

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
    { image: require("./assets/OliveorTwistPhotos/chickenwaffles.jpg"), description: "Chicken and Waffles" },
    { image: require("./assets/OliveorTwistPhotos/boudinballs.jpg"), description: "Boudin Balls" },
    { image: require("./assets/OliveorTwistPhotos/crabfingers.jpg"), description: "Crab Fingers" },
    { image: require("./assets/OliveorTwistPhotos/poboy.jpg"), description: "Poboy" },
    { image: require("./assets/OliveorTwistPhotos/shortribeggrolls.jpg"), description: "Short-Rib Eggrolls" },
  ];

  const [isInfoModalVisible, setInfoModalVisible] = useState(false);

  const toggleInfoModal = () => {
    setInfoModalVisible(!isInfoModalVisible);
  };
  
  const [reviewImages, setReviewImages] = useState([]); // Add this state for managing review images

  const takePhoto = async () => {
    // Request permission to access the camera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    // Open the camera and allow the user to take a photo
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Add the new photo to the reviewImages state
      setReviewImages([...reviewImages, result.uri]);
    }
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
        <Text style={styles.title}>Olive or Twist</Text>

        <View style={ styles.reviewTop }>
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star" size={20} color="#FFA500" />
          <FontAwesome name="star-half-full" size={20} color="#FFA500" />
          <Text style={styles.review}>4.3 (897 Reviews)   $ ⋅ Dining | Bar </Text>
          </View>

        <View style={styles.tScoreContainer}>
          <Text style={styles.tScoreText}>T-score: 1002</Text>
          <Pressable onPress={toggleInfoModal}>
            <FontAwesome name="info-circle" size={20} color="gold" style={styles.infoIcon} />
          </Pressable>
        </View>
      
      <Modal
        visible={isInfoModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
            {/* Your modal content goes here */}
            <TouchableOpacity onPress={toggleInfoModal} style={styles.closeButton}>
              <FontAwesome name="times" size={30} color="black" />
            </TouchableOpacity>
            <Image source={TripTrakLogo} style={styles.tripTrakLogo} />
            <Text style={styles.modalTitle}>T-Score Information</Text>
            <Text style={styles.modalText}>
              Our T-Score is a custom algorithm built to give you only the best restaurants around. 
              We average the reviews from google, yelp, and our own site to give you a score that 
              cannot be found anywhere else. This ensures that the restaurant you go to will be one 
              of the best in the city!
            </Text>
          </View>
        </View>
      </Modal>

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
      <Image source={TripTrakLogo} style={styles.tripTrakLogo} />
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
          {/* Add camera icon and handle onPress to take a photo */}
          <View style={styles.cameraAndImageContainer}>
            <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
              <FontAwesome name="camera" size={30} color="black" />
            </TouchableOpacity>

            {/* Display review images */}
            {reviewImages.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.reviewImage} />
            ))}
          </View>

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
            <Image source={require('./assets/OliveorTwistPhotos/tim.jpg')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tim S.</Text>
            <Text style={styles.locationText}>Mooresville, NC</Text>
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
          <Text numberOfLines={isReview1Expanded ? 0 : 2} style={styles.reviewComment}>All around great food service and atmosphere... Quaint and Cool... Easy access location. It's in a plaza so there is lots of parking. The staff was on point and made great recommendations.</Text>
        </TouchableWithoutFeedback>
        <View style={styles.line}/>

        <View style={styles.reviewContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/OliveorTwistPhotos/Tiffany2.jpg')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tiffany J.</Text>
            <Text style={styles.locationText}>Los Aliamitos, CA</Text>
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
          <Text numberOfLines={isReview2Expanded ? 0 : 2} style={styles.reviewComment}>Neat drinks and the bartenders were awesome. My husband and I tend to order the same drinks everywhere, but over here we wanted to try something different and they did not disappoint. We will definitely be back to try more drink menu items.</Text>
        </TouchableWithoutFeedback>
        <View style={styles.line}/>

        <View style={styles.reviewContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/OliveorTwistPhotos/Vera.jpg')} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Vera G.</Text>
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
        <TouchableWithoutFeedback onPress={expandReview3}>
          <Text numberOfLines={isReview3Expanded ? 0 : 2} style={styles.reviewComment}>My favorite bar to get a cocktail! I love their espresso martini and spinach dip. I always get served almost instantly and everyone is so nice.</Text>
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
    height: 400, // Adjust the height as needed
    marginBottom: 200,
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
  tScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 10,
  },
  tScoreText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 30,
    marginRight: 10,
  },
  infoIcon: {
    marginLeft: 5,
  },
  modalText: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  cameraAndImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cameraButton: {
    marginLeft: 0,
    marginBottom: 10,
    marginTop:10,
  },
  reviewImage: {
    width: 50,
    height: 50,
    marginVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  tripTrakLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain", // Adjust the resizeMode as needed
    marginBottom: 0,
    marginRight: 30,
  },

});

export default OliveorTwistPage;
