import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { styles } from "../styles/RepositoryDetailScreen.styles";
import { Colors } from "../styles/theme";

const RepositoryDetailScreen = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const route = useRoute();
  const { repository } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={isLandscape ? { flexDirection: "row" } : null}>
          <View
            style={
              isLandscape
                ? { width: "35%", paddingRight: 20, alignItems: "center" }
                : styles.header
            }
          >
            <Image
              source={{ uri: repository.owner.avatar_url }}
              style={[
                styles.avatar,
                isLandscape && { width: 120, height: 120 },
              ]}
            />
            <Text style={styles.repoName}>{repository.name}</Text>
            <Text style={styles.ownerName}>{repository.owner.login}</Text>
          </View>

          <View style={isLandscape ? { flex: 1 } : null}>
            <Text
              style={[
                styles.description,
                isLandscape && { textAlign: "left", marginTop: 0 },
              ]}
            >
              {repository.description || "Sem descrição disponível."}
            </Text>

            <View style={styles.metricsGrid}>
              <View
                style={[
                  styles.metricCard,
                  isLandscape && { width: "48%", marginBottom: 12 },
                ]}
              >
                <Octicons name="star" size={20} color={Colors.primary} />
                <Text style={styles.metricValue}>
                  {repository.stargazers_count}
                </Text>
                <Text style={styles.metricLabel}>Stars</Text>
              </View>

              <View
                style={[
                  styles.metricCard,
                  isLandscape && { width: "48%", marginBottom: 12 },
                ]}
              >
                <Octicons name="repo-forked" size={20} color={Colors.primary} />
                <Text style={styles.metricValue}>{repository.forks_count}</Text>
                <Text style={styles.metricLabel}>Forks</Text>
              </View>

              <View
                style={[
                  styles.metricCard,
                  isLandscape && { width: "48%", marginBottom: 12 },
                ]}
              >
                <Octicons
                  name="issue-opened"
                  size={20}
                  color={Colors.primary}
                />
                <Text style={styles.metricValue}>
                  {repository.open_issues_count}
                </Text>
                <Text style={styles.metricLabel}>Issues</Text>
              </View>

              <View
                style={[
                  styles.metricCard,
                  isLandscape && { width: "48%", marginBottom: 12 },
                ]}
              >
                <Octicons name="eye" size={20} color={Colors.primary} />
                <Text style={styles.metricValue}>
                  {repository.watchers_count}
                </Text>
                <Text style={styles.metricLabel}>Watchers</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <View style={styles.infoRow}>
                <Octicons name="code" size={16} color={Colors.inkMuted} />
                <Text style={styles.infoText}>
                  Linguagem: {repository.language || "N/A"}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Octicons name="calendar" size={16} color={Colors.inkMuted} />
                <Text style={styles.infoText}>
                  Criado em:{" "}
                  {new Date(repository.created_at).toLocaleDateString()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RepositoryDetailScreen;
