import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Swipeable, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { repoStyles } from "../styles/RepositoriesScreen.styles";
import { swipeStyles } from "../styles/SwipeableActions.styles.jsx";
import { styles } from "../styles/Main.styles";
import { Colors } from "../styles/theme";

const RepositoriesList = ({
  repos,
  isLoading,
  loadMore,
  isFetchingMore,
  isRefreshing,
  refreshRepos,
}) => {
  const navigation = useNavigation();

  const renderRightActions = (item) => {
    return (
      <RectButton
        style={swipeStyles.rightAction}
        onPress={() => navigation.navigate("RepositoryDetail", { repository: item })}
      >
        <Octicons name="info" size={24} color={Colors.white} />
        <Text style={swipeStyles.actionText}>Detalhes</Text>
      </RectButton>
    );
  };

  const renderRepoItem = ({ item }) => (
    <Swipeable
      renderRightActions={() => renderRightActions(item)}
      friction={2}
      rightThreshold={40}
    >
      <View style={repoStyles.repoCard}>
        <View style={repoStyles.headerRow}>
          <Text style={repoStyles.repoName}>{item.name}</Text>
          <View style={repoStyles.visibilityBadge}>
            <Text style={repoStyles.visibilityText}>{item.visibility}</Text>
          </View>
        </View>

        {item.description && (
          <Text style={repoStyles.description} numberOfLines={2}>
            {item.description}
          </Text>
        )}

        <View style={repoStyles.footerRow}>
          {item.language && (
            <View style={repoStyles.statItem}>
              <View style={repoStyles.languageDot} />
              <Text style={repoStyles.statText}>{item.language}</Text>
            </View>
          )}

          <View style={repoStyles.statItem}>
            <Octicons name="star" size={14} color={Colors.inkMuted} />
            <Text style={repoStyles.statText}>{item.stargazers_count}</Text>
          </View>

          <View style={repoStyles.statItem}>
            <Octicons name="repo-forked" size={14} color={Colors.inkMuted} />
            <Text style={repoStyles.statText}>{item.forks_count}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );

  const renderFooter = () => {
    if (!isFetchingMore) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="small" color={Colors.primary} />
      </View>
    );
  };

  return (
    <>
      {isLoading ? (
        <View style={repoStyles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={repoStyles.loadingText}>Finding repositories...</Text>
        </View>
      ) : repos && repos.length > 0 ? (
        <FlatList
          data={repos}
          renderItem={renderRepoItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={repoStyles.listContainer}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          onRefresh={refreshRepos}
          refreshing={isRefreshing}
        />
      ) : (
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
      )}
    </>
  );
};

export default RepositoriesList;
