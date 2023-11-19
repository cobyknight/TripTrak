import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./favoritespage";
import Profile from "./profilepage";
import Search from "./searchpage";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        centered: true, // This will center the tabs
        labelStyle: {
          textAlign: "center",
        },
      }}
    >
      <Tab.Screen
        name=" "
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/search_selected.png")
                  : require("./assets/search.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/favorites_selected.png")
                  : require("./assets/favorites.png")
              }
              style={{ width: 21, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/profile_selected.png")
                  : require("./assets/profile.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
