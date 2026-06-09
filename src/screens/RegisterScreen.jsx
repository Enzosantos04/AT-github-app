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

//TAREFA 1
const RegisterScreen = ({ navigation }) => {
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
          <Input label="Username" placeholder="Enter a username" />
          <Input label="Email address" placeholder="Enter your email" />
          <Input
            label="Password"
            placeholder="Create a password"
            secureTextEntry
          />

          <Button title="Create account" />
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
