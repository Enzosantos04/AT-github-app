import React from "react";
import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Main.styles";
import { Colors } from "../styles/theme";
//TAREFA 1
const RepositoriesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Repositories</Text>
        <Text style={styles.subtitle}>Manage your GitHub projects</Text>
      </View>

      <View style={styles.card}>
        <Octicons
          name="repo"
          size={48}
          color={Colors.inkMuted}
          style={styles.emptyStateIcon}
        />
        <Text style={styles.cardTitle}>No repositories yet</Text>
        <Text style={styles.cardText}>
          Once you start tracking repositories, they will appear here in a
          structured list.
        </Text>
      </View>
    </View>
  );
};

export default RepositoriesScreen;
