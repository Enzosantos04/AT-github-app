import { StyleSheet } from "react-native";
import { Colors } from "./theme";

export const filterStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    color: Colors.white,
    fontSize: 14,
    marginLeft: 8,
  },
  sortContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortLabel: {
    fontSize: 12,
    color: Colors.inkMuted,
    marginRight: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  sortOptions: {
    flexDirection: "row",
    flex: 1,
  },
  sortChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
    marginRight: 8,
  },
  sortChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  sortChipText: {
    fontSize: 12,
    color: Colors.inkMuted,
    fontWeight: "500",
  },
  sortChipTextActive: {
    color: Colors.white,
    fontWeight: "600",
  },
});
