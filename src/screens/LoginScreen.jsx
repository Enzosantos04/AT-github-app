import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//TAREFA 1
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Github App</Text>
      <Button title="Login" onPress={() => navigation.navigate("Main")} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default LoginScreen;
