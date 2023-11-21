import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./mainpage";
import TabNavigator from "./navbar";
import HighlandCoffeesPage from "./HighlandCoffeesPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const Stack = createStackNavigator();


/// Stack screen shows "Search" on top of all pages, figure out a way to only show that on Search Page
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=" ">
        <Stack.Screen name=" " component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={TabNavigator} options={{ headerShown: false }}/> 
        <Stack.Screen name="HighlandCoffeesPage" component={HighlandCoffeesPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}