import React from "react";
import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Main.styles";
import { Colors } from "../styles/theme";
//TAREFA 1
const IssuesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Issues</Text>
        <Text style={styles.subtitle}>Track bugs and tasks</Text>
      </View>

      <View style={styles.card}>
        <Octicons
          name="issue-opened"
          size={48}
          color={Colors.inkMuted}
          style={styles.emptyStateIcon}
        />
        <Text style={styles.cardTitle}>Everything is clear</Text>
        <Text style={styles.cardText}>
          You don't have any open issues across your tracked repositories.
        </Text>
      </View>
    </View>
  );
};

export default IssuesScreen;
