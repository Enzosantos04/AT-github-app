import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DrawerNavigator from "./DrawerNavigator";
import RepositoryDetailScreen from "../screens/RepositoryDetailScreen";
import IssueDetailScreen from "../screens/IssueDetailScreen";
import { useAuth } from "../context/AuthContext";

const Stack = createStackNavigator();

//TAREFA 1
const RootNavigator = () => {
  const { userToken } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="GitHub App"
    >
      {userToken ? (
        <>
          <Stack.Screen name="Main" component={DrawerNavigator} />
          <Stack.Screen
            name="RepositoryDetail"
            component={RepositoryDetailScreen}
            options={{
              headerShown: true,
              headerTitle: "Detalhes do Repo",
              headerTintColor: "#58a6ff",
              headerStyle: { backgroundColor: "#0d1117" },
            }}
          />
          <Stack.Screen
            name="IssueDetail"
            component={IssueDetailScreen}
            options={{
              headerShown: true,
              headerTitle: "Detalhes da Issue",
              headerTintColor: "#58a6ff",
              headerStyle: { backgroundColor: "#0d1117" },
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="GitHub App" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
