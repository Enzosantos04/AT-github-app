import React from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/LoginScreen.styles";
import { Colors } from "../styles/theme";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-native";
import { useState } from "react";

//TAREFA 1
const RegisterScreen = ({ navigation }) => {
  const { register } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (username, password) => {
    if (!username || !password) {
      Alert.alert("Erro", "Nome de usuário e senha são obrigatórios.");
      return;
    }
    register(username, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Octicons name="mark-github" size={48} color={Colors.ink} />
          <Text style={styles.title}>Join GitHub</Text>
          <Text style={styles.subtitle}>Create your personal account</Text>
        </View>

        <View style={styles.card}>
          <Input
            label="Username"
            placeholder="Enter a username"
            value={username}
            onChangeText={setUsername}
          />
          <Input label="Email address" placeholder="Enter your email" />
          <Input
            label="Password"
            placeholder="Create a password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Button
            title="Create account"
            onPress={() => handleRegister(username, password)}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.subtitle}>
            Already have an account?{" "}
            <Text style={styles.linkText} onPress={() => navigation.goBack()}>
              Sign in.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
