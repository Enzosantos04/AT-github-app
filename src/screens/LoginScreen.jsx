import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/LoginScreen.styles";
import { Colors } from "../styles/theme";
import Input from "../components/Input";
import Button from "../components/Button";

//TAREFA 1
const LoginScreen = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    navigation.navigate("Main");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Octicons name="mark-github" size={60} color={Colors.ink} />
          <Text style={styles.title}>Sign in to GitHub</Text>
        </View>

        <View style={styles.card}>
          <Input
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Input
            label="Personal Access Token"
            placeholder="ghp_xxxxxxxxxxxx"
            value={token}
            onChangeText={setToken}
            secureTextEntry
          />

          <Button title="Sign in" onPress={handleLogin} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.subtitle}>
            New to GitHub?{" "}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Register")}
            >
              Create an account.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
