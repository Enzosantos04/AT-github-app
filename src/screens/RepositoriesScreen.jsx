import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Main.styles";
import { useGithubContext } from "../context/githubContext";
import RepositoriesList from "../components/RepositoriesList";

//TAREFA 7
const RepositoriesScreen = () => {
  const { repos, isLoading } = useGithubContext();

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Repositories</Text>
        <Text style={styles.subtitle}>Manage your GitHub projects</Text>
      </View>

      <RepositoriesList repos={repos} isLoading={isLoading} />
    </View>
  );
};

export default RepositoriesScreen;
