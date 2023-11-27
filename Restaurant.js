import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function RestaurantDisplay({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/highland_coffees.png')}
        style={styles.restaurantImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.restaurantName}>Highland Coffees</Text>
        <View style={styles.ratingContainer}>
          <Image
            source={require('./assets/4.5_star.png')}
            style={styles.ratingImage}
          />
          <Text style={styles.ratingText}>4.5 stars</Text>
        </View>
        <Text style={styles.motto}>
          Highland Coffees, located at the historic North Gates of LSU, provides a casual yet refined coffee shop experience for customers seeking a quiet place to read, visit with friends, or work at a laptop.
        </Text>
        <Text style={styles.description}>
          Our shop offers distinctive coffees roasted right in the shop, fine loose teas, exquisite pastries, tasty specialty drinks, and attractive retail items. Highland Coffees is designed with customer enjoyment as its focus. We invite you to come in and spend some time with us.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingImage: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  ratingText: {
    fontSize: 16,
  },
  motto: {
    fontSize: 16,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
  },
});

export default RestaurantDisplay;
