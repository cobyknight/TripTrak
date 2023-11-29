import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PrivacyPage = () => {
  const navigation = useNavigation();

  // Your privacy policy content
  const privacyPolicy = [
    { id: '1', title: 'Data Collection', detailScreen: 'DataCollectionDetail' },
    { id: '2', title: 'Data Usage', detailScreen: 'DataUsageDetail' },
    // More policy points...
  ];

  // Function for handling privacy policy item press
  const onPolicyPress = (policyId, detailScreen) => {
    navigation.navigate(detailScreen, { policyId });
  };

  // Function to render each privacy policy point
  const renderPrivacyPolicyPoint = ({ item }) => (
    <TouchableOpacity
      style={styles.policyItem}
      onPress={() => onPolicyPress(item.id, item.detailScreen)}
    >
      <FontAwesome name="lock" size={24} color="white" />
      <View style={styles.policyText}>
        <Text style={styles.policyTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>
      <FlatList
        data={privacyPolicy}
        renderItem={renderPrivacyPolicyPoint}
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
  policyItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#303136',
    alignItems: 'center',
  },
  policyText: {
    marginLeft: 15,
  },
  policyTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // ... other styles if necessary ...
});

export default PrivacyPage;
