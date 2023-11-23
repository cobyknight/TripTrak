import React from "react";
import { StatusBar, StyleSheet, View, Text, Image, Pressable, ScrollView, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HighlandCoffeesPage = () => {
  const navigation = useNavigation();
  const goBackAPage = () => {
    navigation.goBack("SearchPage"); // Navigate to the 'search page' screen
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle={ 'dark-content' }/>
      <View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default HighlandCoffeesPage;
