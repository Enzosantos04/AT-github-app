import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const localStyles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.ink,
  },
  userHandle: {
    fontSize: 16,
    color: Colors.inkMuted,
    marginTop: 2,
  },
  configCard: {
    backgroundColor: Colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.ink,
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    color: Colors.inkMuted,
    marginBottom: 20,
    lineHeight: 20,
  },
  helperText: {
    fontSize: 12,
    color: Colors.inkMuted,
    textAlign: "center",
    marginTop: 12,
  },
  actionsContainer: {
    paddingBottom: 40,
  },
});
