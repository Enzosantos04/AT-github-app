import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../styles/theme";

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize = "none",
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.inkMuted}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        selectionColor={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.ink,
    marginBottom: 6,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    color: Colors.ink,
    backgroundColor: Colors.background,
  },
});

export default Input;
