import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NotificationsPage = () => {
  const navigation = useNavigation();

  // Your existing notifications array
  const notifications = [
    { id: '1', title: 'Welcome to TripTrak', time: '1h ago', detailScreen: 'WelcomeDetail' },
    { id: '2', title: 'New message', time: 'Yesterday', detailScreen: 'messageDetail' },
    // More notifications...
  ];

  // Your existing onNotificationPress function
  const onNotificationPress = (notificationId, detailScreen) => {
    navigation.navigate(detailScreen, { notificationId });
  };

  // Function to render each notification
  const renderNotification = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        index === 0 ? styles.firstNotificationItem : null, // Apply extra top margin to the first item
      ]}
      onPress={() => onNotificationPress(item.id, item.detailScreen)}
    >
      <FontAwesome name="bell" size={24} color="white" />
      <View style={styles.notificationText}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c21',
  },
  header: {
    marginTop: 35,
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#303136',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  notificationItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10, // Decreased bottom padding
    paddingLeft: 20, // Increased left padding
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#303136',
    alignItems: 'center',
  },
  firstNotificationItem: {
    marginTop: 15, // Additional top margin for the first notification
  },
  notificationText: {
    marginLeft: 15, // Increased left margin for the text specifically
  },
  notificationTitle: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24, // Adjust lineHeight to ensure even spacing
  },
  notificationTime: {
    color: 'grey',
    fontSize: 12,
    lineHeight: 18, // Adjust lineHeight to ensure even spacing
  },
  // ... other styles if necessary ...
});

export default NotificationsPage;
