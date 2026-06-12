import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.border,
    marginBottom: 16,
  },
  repoName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
  ownerName: {
    fontSize: 16,
    color: Colors.primary,
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    color: Colors.ink,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  metricCard: {
    backgroundColor: Colors.surface,
    width: "48%",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 16,
    alignItems: "center",
  },
  metricValue: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.white,
    marginTop: 8,
  },
  metricLabel: {
    fontSize: 12,
    color: Colors.inkMuted,
    marginTop: 2,
    textTransform: "uppercase",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 24,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: Colors.ink,
    marginLeft: 8,
  },
});
