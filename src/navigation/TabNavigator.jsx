import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { Colors } from "../styles/theme";

import RepositoriesScreen from "../screens/RepositoriesScreen";
import IssuesScreen from "../screens/IssuesScreen";
import ProfileScreen from "../screens/ProfileScreen";

//TAREFA 1
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.inkMuted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Profile") iconName = "person";
          else if (route.name === "Repositories") iconName = "repo";
          else if (route.name === "Issues") iconName = "issue-opened";
          return <Octicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Repositories" component={RepositoriesScreen} />
      <Tab.Screen name="Issues" component={IssuesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
