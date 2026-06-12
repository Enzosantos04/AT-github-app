import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const issueStyles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  issueCard: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  iconContainer: {
    marginRight: 10,
    marginTop: 2,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.ink,
    lineHeight: 22,
  },
  description: {
    fontSize: 14,
    color: Colors.inkMuted,
    marginTop: 4,
    lineHeight: 20,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  repoInfo: {
    fontSize: 12,
    color: Colors.inkMuted,
    fontWeight: "500",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    marginLeft: "auto",
  },
  badgeText: {
    fontSize: 11,
    color: Colors.inkMuted,
    fontWeight: "600",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  loadingText: {
    marginTop: 12,
    color: Colors.inkMuted,
    fontSize: 14,
  },
});
