import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "./context/AuthContext";
import GithubProvider from "./context/githubContext";

//TAREFA 1
const App = () => {
  return (
    //tarefa 2
    <AuthProvider>
      <GithubProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <RootNavigator />
        </NavigationContainer>
      </GithubProvider>
    </AuthProvider>
  );
};

export default App;
