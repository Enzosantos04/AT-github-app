import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/ProgressBar.styles";

const ProgressBarIssues = ({ current, total }) => {
  const totalCount = 20;
  const currentCount = current || 0;

  const percentage =
    totalCount > 0
      ? Math.min(Math.round((currentCount / totalCount) * 100), 100)
      : 0;
  return (
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <Text style={styles.countText}>
          {currentCount} / {totalCount} issues
        </Text>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

export default ProgressBarIssues;
