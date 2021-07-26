import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ReadStory from "./screens/ReadStory";
import WriteStory from "./screens/WriteStory";

export default function App() {
  return <AppContainer />;
}

const TabNavigator = createBottomTabNavigator(
  {
    "Write story": { screen: WriteStory },
    "Read story": { screen: ReadStory },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === "Read story") {
          return (
            <Image
              source={require("./assets/read.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === "Write story") {
          return (
            <Image
              source={require("./assets/write.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);


