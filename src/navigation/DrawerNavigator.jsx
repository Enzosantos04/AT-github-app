import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useGithubContext } from "../context/githubContext";
import { useAuth } from "../context/AuthContext";
import TabNavigator from "./TabNavigator";
import { Colors } from "../styles/theme";
import { drawerStyles as styles } from "../styles/DrawerNavigator.styles";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { userData } = useGithubContext();
  const { signOut } = useAuth();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          {userData?.avatar_url ? (
            <Image
              source={{ uri: userData.avatar_url }}
              style={styles.avatar}
            />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Octicons name="person" size={40} color={Colors.inkMuted} />
            </View>
          )}
        </View>
        <Text style={styles.userName} numberOfLines={1}>
          {userData?.name || "GitHub User"}
        </Text>
        <Text style={styles.userHandle} numberOfLines={1}>
          {userData?.login ? `@${userData.login}` : "@username"}
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userData?.followers || 0}</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userData?.following || 0}</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>

      <View style={styles.itemListContainer}>
        <DrawerItemList {...props} />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Octicons name="sign-out" size={18} color={Colors.danger} />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

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
