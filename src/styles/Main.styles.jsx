import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  headerSection: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
    color: Colors.ink,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.inkMuted,
    marginTop: 4,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
  },
  emptyStateIcon: {
    marginBottom: 16,
    opacity: 0.5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.ink,
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    color: Colors.inkMuted,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },
});
