import React from "react";
import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Main.styles";
import { Colors } from "../styles/theme";
import { useGithubContext } from "../context/githubContext";
import IssuesList from "../components/IssuesList";
//TAREFA 1
const IssuesScreen = () => {
  const {
    issues,
    isLoading,
    loadMoreIssues,
    isFetchingMoreIssues,
    isRefreshingIssues,
    refreshIssues,
  } = useGithubContext();
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Issues</Text>
        <Text style={styles.subtitle}>Track bugs and tasks</Text>
      </View>

      <IssuesList
        issues={issues}
        isLoading={isLoading}
        loadMoreIssues={loadMoreIssues}
        isFetchingMoreIssues={isFetchingMoreIssues}
        isRefreshingIssues={isRefreshingIssues}
        refreshIssues={refreshIssues}
      />
    </View>
  );
};

export default IssuesScreen;
