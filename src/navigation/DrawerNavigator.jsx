import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Octicons } from "@expo/vector-icons";
import TabNavigator from "./TabNavigator";
import { Colors } from "../styles/theme";
import CustomDrawerContent from "../components/Drawer";

//TAREFA 6
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.background,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: Colors.border,
        },
        headerTintColor: Colors.ink,
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 16,
        },
        drawerStyle: {
          backgroundColor: Colors.background,
          width: 280,
        },
        drawerActiveBackgroundColor: Colors.surface,
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: Colors.inkMuted,
        drawerItemStyle: {
          borderRadius: 8,
          marginHorizontal: 12,
          paddingHorizontal: 4,
        },
        drawerLabelStyle: {
          marginLeft: -10,
          fontWeight: "600",
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Octicons name="home" size={20} color={color} />
          ),
          headerTitle: "GitHub App",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
