import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function RestaurantDisplay({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('')}
        style={styles.restaurantImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.restaurantName}>Tio Javi's Bar & Grill</Text>
        <View style={styles.ratingContainer}>
          <Image
            source={require('')}
            style={styles.ratingImage}
          />
          <Text style={styles.ratingText}>4.5 stars</Text>
        </View>
        <Text style={styles.motto}>
          
        </Text>
        <Text style={styles.description}>
          
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
