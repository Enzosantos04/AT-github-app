import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const swipeStyles = StyleSheet.create({
  rightAction: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 12,
    marginBottom: 12,
    marginLeft: 10,
  },
  actionText: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 12,
    marginTop: 4,
  },
});
