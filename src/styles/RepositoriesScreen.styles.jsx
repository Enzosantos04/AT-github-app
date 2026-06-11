import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const repoStyles = StyleSheet.create({
  listContainer: {
    paddingBottom: 24,
  },
  repoCard: {
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  repoName: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary,
    flex: 1,
    marginRight: 8,
  },
  visibilityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  visibilityText: {
    fontSize: 11,
    fontWeight: "500",
    color: Colors.inkMuted,
    textTransform: "capitalize",
  },

  description: {
    fontSize: 14,
    color: Colors.ink,
    lineHeight: 20,
    marginBottom: 16,
  },

  footerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  statText: {
    fontSize: 12,
    color: Colors.inkMuted,
    marginLeft: 4,
  },
  languageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
    backgroundColor: Colors.primary,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: Colors.inkMuted,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    marginTop: 40,
  },
  emptyIcon: {
    marginBottom: 16,
    opacity: 0.3,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.ink,
    marginBottom: 8,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 14,
    color: Colors.inkMuted,
    textAlign: "center",
    lineHeight: 20,
  },
});
