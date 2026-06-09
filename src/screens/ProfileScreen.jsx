import React from "react";
import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Main.styles";
import { Colors } from "../styles/theme";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Your Profile</Text>
        <Text style={styles.subtitle}>Manage your GitHub identity</Text>
      </View>

      <View style={styles.card}>
        <Octicons name="person" size={48} color={Colors.inkMuted} style={styles.emptyStateIcon} />
        <Text style={styles.cardTitle}>Profile Preview</Text>
        <Text style={styles.cardText}>
          Your GitHub details and Personal Access Token status will be displayed here.
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
