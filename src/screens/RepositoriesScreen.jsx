import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/Main.styles";
import { filterStyles } from "../styles/FilterSection.styles";
import { useGithubContext } from "../context/githubContext";
import RepositoriesList from "../components/RepositoriesList";
import ProgressBar from "../components/ProgressBar";
import { Colors } from "../styles/theme";

// TAREFA 7, 13 & 16
const RepositoriesScreen = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const {
    repos,
    isLoading,
    userData,
    loadMoreRepos,
    isFetchingMore,
    isRefreshing,
    refreshRepos,
  } = useGithubContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const processedRepos = useMemo(() => {
    let filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortBy === "stars") {
        return b.stargazers_count - a.stargazers_count;
      }
      if (sortBy === "updated") {
        return new Date(b.updated_at) - new Date(a.updated_at);
      }
      return a.name.localeCompare(b.name);
    });
  }, [repos, searchQuery, sortBy]);

  const SortChip = ({ label, value }) => (
    <TouchableOpacity
      style={[
        filterStyles.sortChip,
        sortBy === value && filterStyles.sortChipActive,
      ]}
      onPress={() => setSortBy(value)}
    >
      <Text
        style={[
          filterStyles.sortChipText,
          sortBy === value && filterStyles.sortChipTextActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.headerSection,
          isLandscape && {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 8,
            marginBottom: 12,
          },
        ]}
      >
        <View style={isLandscape && { flex: 1 }}>
          <Text style={styles.title}>Repositories</Text>
          {!isLandscape && (
            <Text style={styles.subtitle}>Manage your GitHub projects</Text>
          )}
        </View>
        <View style={isLandscape ? { width: "40%" } : { marginTop: 8 }}>
          <ProgressBar
            current={repos.length}
            total={userData?.public_repos || 0}
          />
        </View>
      </View>

      <View
        style={[
          filterStyles.container,
          isLandscape && {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          },
        ]}
      >
        <View
          style={[
            filterStyles.searchBar,
            isLandscape && { flex: 1, marginBottom: 0, marginRight: 16 },
          ]}
        >
          <Octicons name="search" size={18} color={Colors.inkMuted} />
          <TextInput
            style={filterStyles.searchInput}
            placeholder="Search repositories..."
            placeholderTextColor={Colors.inkMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery !== "" && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Octicons name="x-circle-fill" size={16} color={Colors.inkMuted} />
            </TouchableOpacity>
          )}
        </View>

        <View style={[filterStyles.sortContainer, isLandscape && { flex: 1 }]}>
          {!isLandscape && <Text style={filterStyles.sortLabel}>Sort by:</Text>}
          <View style={filterStyles.sortOptions}>
            <SortChip label="Name" value="name" />
            <SortChip label="Stars" value="stars" />
            <SortChip label="Updated" value="updated" />
          </View>
        </View>
      </View>

      <RepositoriesList
        repos={processedRepos}
        isLoading={isLoading}
        loadMore={loadMoreRepos}
        isFetchingMore={isFetchingMore}
        isRefreshing={isRefreshing}
        refreshRepos={refreshRepos}
      />
    </View>
  );
};

export default RepositoriesScreen;
