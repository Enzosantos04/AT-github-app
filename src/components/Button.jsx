import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { Colors } from "../styles/theme";

const Button = ({
  title,
  onPress,
  type = "primary",
  loading = false,
  style,
  icon,
}) => {
  const isSecondary = type === "secondary";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSecondary ? styles.secondaryButton : styles.primaryButton,
        style,
      ]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={isSecondary ? Colors.ink : Colors.background}
        />
      ) : (
        <View style={styles.content}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text
            style={[
              styles.text,
              isSecondary ? styles.secondaryText : styles.primaryText,
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 6,
  },
  primaryButton: {
    backgroundColor: "#238636",
    borderWidth: 1,
    borderColor: "rgba(240, 246, 252, 0.1)",
  },
  secondaryButton: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  primaryText: {
    color: Colors.white,
  },
  secondaryText: {
    color: Colors.primary,
  },
});

export default Button;
