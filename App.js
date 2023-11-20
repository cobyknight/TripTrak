import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./mainpage";
import TabNavigator from "./navbar";
import HighlandCoffeesPage from "./HighlandCoffeesPage";

const Stack = createStackNavigator();


/// Stack screen shows "Search" on top of all pages, figure out a way to only show that on Search Page
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=" ">
        <Stack.Screen name=" " component={MainPage} />
        <Stack.Screen name="Search" component={TabNavigator} /> 
        <Stack.Screen name="HighlandCoffeesPage" component={HighlandCoffeesPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}