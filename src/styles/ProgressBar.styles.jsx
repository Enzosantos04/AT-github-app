import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 4,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 6,
  },

  countText: {
    fontSize: 11,
    color: Colors.inkMuted,
    fontWeight: "500",
  },

  percentageText: {
    fontSize: 11,
    fontWeight: "700",
    color: Colors.primary,
    opacity: 0.9,
  },

  track: {
    height: 5,
    width: "100%",
    backgroundColor: Colors.border,
    borderRadius: 2,
    overflow: "hidden",
  },

  fill: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
});
