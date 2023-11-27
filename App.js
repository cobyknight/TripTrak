import React, { useState } from "react";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from '@expo/vector-icons';
import SearchPage from './SearchPage';
import HighlandCoffeesPage from './HighlandCoffeesPage';
import FavoritesPage from './FavoritesPage';
import ProfilePage from './ProfilePage';
import SignInPage from './SignInPage';
import SignUpPage from "./SignUpPage";
import BatonRougeFavoritesPage from "./BatonRougeFavoritesPage";

const Stack = createStackNavigator();
function PageNav () {
  return (
      <Stack.Navigator initialRouteName="SearchPage" options={{ headerShown: false }} >
        <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
        <Stack.Screen name="HighlandCoffeesPage" component={HighlandCoffeesPage} options={{ headerShown: false }} />
        <Stack.Screen name="BatonRougeFavoritesPage" component={BatonRougeFavoritesPage} options={{headerShown: false}} />
        <Stack.Screen name="SignInPage" component={SignInPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

const FavStack = createStackNavigator();
function FavStackNav() {
  return (
    <FavStack.Navigator initialRouteName="FavoritesPage" screenOptions={{ headerShown: false }} >
      <FavStack.Screen name="FavoritesPage" component={FavoritesPage} options={{ headerShown: false }} />
      <FavStack.Screen name="BatonRougeFavoritesPage" component={BatonRougeFavoritesPage} options={{ headerShown: false }} />
      <FavStack.Screen name="HighlandCoffeesPage" component={HighlandCoffeesPage} options={{ headerShown: false }} />
    </FavStack.Navigator>
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