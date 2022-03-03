/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { default as Ionicon } from "react-native-vector-icons/Ionicons";
import { default as Feathericon } from "react-native-vector-icons/Feather";
import Home from "../Screens/Home";
import Cards from "../Screens/Cards";
import Help from "../Screens/Help";
import More from "../Screens/More";
import Notifications from "../Screens/Notifications";
import ScreenHeader from "../components/ScreenHeader";

const screens = [
  {
    name: "HOME",
    icon: (color) => (
      <Ionicon name="ios-home-outline" size={30} color={color} />
    ),
    component: Home,
  },
  {
    name: "CARDS",
    icon: (color) => (
      <Ionicon name="ios-card-outline" size={30} color={color} />
    ),
    component: Cards,
  },
  {
    name: "NOTIFICATIONS",
    icon: (color) => (
      <Ionicon name="md-notifications-outline" size={30} color={color} />
    ),
    component: Notifications,
  },
  {
    name: "HELP",
    icon: (color) => (
      <Ionicon name="help-circle-outline" size={30} color={color} />
    ),
    component: Help,
  },

  {
    name: "MORE",
    icon: (color) => (
      <Feathericon name="more-horizontal" size={30} color={color} />
    ),
    component: More,
  },
];

const noHeader = ["HOME"];
const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { paddingBottom: 10 },
        headerShown: true,
        header: ({ route }) => {
          const showHeader = !noHeader.includes(route.name);
          return showHeader && <ScreenHeader heading={route.name} showAvatar />;
        },
      }}
      initialRouteName="HOME"
    >
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          component={screen.component}
          name={screen.name}
          options={{
            tabBarIcon: ({ focused }) =>
              screen.icon(focused ? "#008fff" : "black"),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  color: focused ? "#008fff" : "black",
                  fontSize: 10,
                }}
              >
                {screen.name}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
