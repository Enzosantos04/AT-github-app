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
    marginBottom: 24,
  },
  stateBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  stateText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
    textTransform: "capitalize",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.white,
    lineHeight: 30,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  metaText: {
    fontSize: 14,
    color: Colors.inkMuted,
  },
  authorName: {
    color: Colors.ink,
    fontWeight: "600",
  },
  bodyContainer: {
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginTop: 8,
  },
  bodyText: {
    fontSize: 16,
    color: Colors.ink,
    lineHeight: 24,
  },
  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  repoLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  repoText: {
    fontSize: 14,
    color: Colors.primary,
    marginLeft: 8,
  },
});
