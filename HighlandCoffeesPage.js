import React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const HighlandCoffeesPage = () => {
  const navigation = useNavigation();
  const goBackAPage = () => {
    navigation.goBack("SearchPage");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1c21'}}>
      <View>
        <Pressable onPress={goBackAPage}>
          <FontAwesome name="arrow-circle-left" size={50} color="white" style={styles.icon} />
        </Pressable>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
icon: {
    padding: 30,
  },
});

export default HighlandCoffeesPage;
