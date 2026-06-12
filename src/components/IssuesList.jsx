import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Main.styles";
import { issueStyles } from "../styles/IssuesScreen.styles";
import { Colors } from "../styles/theme";

const IssuesList = ({
  issues,
  isLoading,
  loadMoreIssues,
  isFetchingMoreIssues,
}) => {
  const renderIssueItem = ({ item }) => (
    <View style={issueStyles.issueCard}>
      <View style={issueStyles.headerRow}>
        <View style={issueStyles.iconContainer}>
          <Octicons
            name="issue-opened"
            size={18}
            color={item.state === "open" ? "#3fb950" : "#a371f7"}
          />
        </View>
        <View style={issueStyles.contentContainer}>
          <Text style={issueStyles.title}>{item.title}</Text>
          {item.body ? (
            <Text style={issueStyles.description} numberOfLines={2}>
              {item.body.replace(/[\n\r]+/g, " ")}
            </Text>
          ) : null}
        </View>
      </View>

      <View style={issueStyles.footerRow}>
        <Text style={issueStyles.repoInfo}>
          {item.repository?.full_name || "GitHub"}
        </Text>
        <View style={issueStyles.badge}>
          <Text style={issueStyles.badgeText}>#{item.number}</Text>
        </View>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (!isFetchingMoreIssues) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="small" color={Colors.primary} />
      </View>
    );
  };

  return (
    <>
      {isLoading ? (
        <View style={issueStyles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={issueStyles.loadingText}>Finding issues...</Text>
        </View>
      ) : issues && issues.length > 0 ? (
        <FlatList
          data={issues}
          renderItem={renderIssueItem}
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          }
          contentContainerStyle={issueStyles.listContainer}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreIssues}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      ) : (
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
      )}
    </>
  );
};

export default IssuesList;
