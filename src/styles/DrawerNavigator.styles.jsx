import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const drawerStyles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 24,
    paddingTop: 48,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatarPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 8,
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  userName: {
    color: Colors.ink,
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: -0.5,
  },
  userHandle: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statValue: {
    color: Colors.ink,
    fontSize: 14,
    fontWeight: "600",
    marginRight: 4,
  },
  statLabel: {
    color: Colors.inkMuted,
    fontSize: 13,
  },
  itemListContainer: {
    flex: 1,
    paddingTop: 12,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.background,
  },
  logoutText: {
    color: Colors.danger,
    fontWeight: "600",
    marginLeft: 12,
  },
});
