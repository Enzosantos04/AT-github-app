import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Main.styles";
import { useGithubContext } from "../context/githubContext";
import RepositoriesList from "../components/RepositoriesList";
import ProgressBar from "../components/ProgressBar";

//TAREFA 7
const RepositoriesScreen = () => {
  const { repos, isLoading, userData, loadMoreRepos, isFetchingMore } =
    useGithubContext();

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Repositories</Text>
        <ProgressBar
          current={repos.length}
          total={userData?.public_repos || 0}
        />
        <Text style={styles.subtitle}>Manage your GitHub projects</Text>
      </View>

      <RepositoriesList
        repos={repos}
        isLoading={isLoading}
        loadMore={loadMoreRepos}
        isFetchingMore={isFetchingMore}
      />
    </View>
  );
};

export default RepositoriesScreen;
