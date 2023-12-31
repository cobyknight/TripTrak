import React, { useState } from "react";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from '@expo/vector-icons';
import SearchPage from './SearchPage';
import HighlandCoffeesPage from './HighlandCoffeesPage';
import CitySlicePage from './CitySlicePage';
import OliveOrTwistPage from './OliveOrTwistPage';
import RoulsDeliPage from './RoulsDeliPage';
import TheChimesPage from './TheChimesPage';
import TioJavisPage from './TioJavisPage';
import FavoritesPage from './FavoritesPage';
import ProfilePage from './profilepage';
import SignInPage from './SignInPage';
import SignUpPage from "./SignUpPage";
import BatonRougeFavoritesPage from "./BatonRougeFavoritesPage";
import NotificationsPage from "./NotificationsPage";
import PrivacyPage from "./PrivacyPage";
import SettingPage from "./SettingPage";


const Stack = createStackNavigator();
function PageNav () {
  return (
      <Stack.Navigator initialRouteName="SearchPage" options={{ headerShown: false }} >
        <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
        <Stack.Screen name="HighlandCoffeesPage" component={HighlandCoffeesPage} options={{ headerShown: false }} />
        <Stack.Screen name="CitySlicePage" component={CitySlicePage} options={{ headerShown: false }} />
        <Stack.Screen name="OliveOrTwistPage" component={OliveOrTwistPage} options={{ headerShown: false }} />
        <Stack.Screen name="RoulsDeliPage" component={RoulsDeliPage} options={{ headerShown: false }} />
        <Stack.Screen name="TheChimesPage" component={TheChimesPage} options={{ headerShown: false }} />
        <Stack.Screen name="TioJavisPage" component={TioJavisPage} options={{ headerShown: false }} />
        <Stack.Screen name="BatonRougeFavoritesPage" component={BatonRougeFavoritesPage} options={{headerShown: false}} />
        <Stack.Screen name="SignInPage" component={SignInPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationsPage" component={NotificationsPage} options={{ headerShown: false }}/>
        <Stack.Screen name="PrivacyPage" component={PrivacyPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SettingPage" component={SettingPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}

const FavStack = createStackNavigator();
function FavStackNav() {
  return (
    <FavStack.Navigator initialRouteName="FavoritesPage" screenOptions={{ headerShown: false }} >
      <FavStack.Screen name="FavoritesPage" component={FavoritesPage} options={{ headerShown: false }} />
      <FavStack.Screen name="BatonRougeFavoritesPage" component={BatonRougeFavoritesPage} options={{ headerShown: false }} />
      <Stack.Screen name="HighlandCoffeesPage" component={HighlandCoffeesPage} options={{ headerShown: false }} />
        <Stack.Screen name="CitySlicePage" component={CitySlicePage} options={{ headerShown: false }} />
        <Stack.Screen name="OliveOrTwistPage" component={OliveOrTwistPage} options={{ headerShown: false }} />
        <Stack.Screen name="RoulsDeliPage" component={RoulsDeliPage} options={{ headerShown: false }} />
        <Stack.Screen name="TheChimesPage" component={TheChimesPage} options={{ headerShown: false }} />
        <Stack.Screen name="TioJavisPage" component={TioJavisPage} options={{ headerShown: false }} />
    </FavStack.Navigator>
  );
}

const ProfStack = createStackNavigator();
function ProfStackNav() {
  return (
    <ProfStack.Navigator initialRouteName="ProfilePage" screenOptions={{ headerShown: false }} >
      <ProfStack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
      <ProfStack.Screen name="NotificationsPage" component={NotificationsPage} options={{ headerShown: false }} />
      <ProfStack.Screen name="PrivacyPage" component={PrivacyPage} options={{ headerShown: false }} />
      <ProfStack.Screen name="SettingPage" component={SettingPage} options={{ headerShown: false }} />
    </ProfStack.Navigator>
  );
}

const AuthStack = createStackNavigator();
function AuthStackNav() {
  return (
    <AuthStack.Navigator initialRouteName="SignInPage" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignInPage" component={SignInPage} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
      <AuthStack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNav () {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => 
      ({
        tabBarStyle: {
          backgroundColor: '#1a1c21',
        }, 
        tabBarIcon: ({ focused, color, size }) => 
      {
        let iconName;
        if (route.name === 'Home')
        {
          iconName = focused ? 'home' : 'home';
        }
        else if (route.name === 'Favorites')
        {
          iconName = focused ? 'heart' : 'heart-o';
        }
        else if (route.name === 'Account')
        {
          iconName = focused ? 'user' : 'user-o';
        }
        return <FontAwesome name = {iconName} size={size} color={color} />;
      }, 
      })}
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray', }}
      >
        <Tab.Screen name="Home" component={PageNav} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={FavStackNav} options={{ headerShown: false } }/>
        <Tab.Screen name="Account" component={ProfilePage} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}

const ref = createNavigationContainerRef();
export default function App() {
  const [routeName, setRouteName] = useState();
  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        setRouteName(ref.getCurrentRoute().name);
      }}
      onStateChange={async () => {
        const currentRouteName = ref.getCurrentRoute().name;
        setRouteName(currentRouteName);
      }}
    >
      {routeName === 'SignInPage' || routeName === 'SignUpPage' ? ( <AuthStackNav /> ) 
      : ( <TabNav routeName={routeName} /> )}
    </NavigationContainer>
  );
}