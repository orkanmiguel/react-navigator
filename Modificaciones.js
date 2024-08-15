import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

//icons
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreens";
import StackScreen from "./screens/StackScreen";
import { Button } from "react-native";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack({ navigation }) {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.setParams("incrementar")}
              title="Mas 1"
              color="black"
            />
          ),
          headerBackTitleVisible: true,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "red" },
          headerTitleStyle: {
            fontWeight: "900",
          },
        }}
      />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("Mensaje de Alerta")}
              title="Alerta"
              color="black"
            />
          ),
          headerBackTitleVisible: true,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "red" },
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarColor: "black",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarBadge: 10,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="brightness-5"
              color={color}
              size={30}
            />
          ),
          tabBarBadge: 1,
          headerShown: true,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "red" },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
