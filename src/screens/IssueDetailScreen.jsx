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
import { styles } from "../styles/IssueDetailScreen.styles";
import { Colors } from "../styles/theme";

const IssueDetailScreen = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const route = useRoute();
  const { issue } = route.params;

  const isOpen = issue.state === "open";

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={isLandscape ? { flexDirection: "row" } : null}>
          <View
            style={
              isLandscape ? { width: "40%", paddingRight: 20 } : styles.header
            }
          >
            <View
              style={[
                styles.stateBadge,
                { backgroundColor: isOpen ? Colors.success : "#a371f7" },
              ]}
            >
              <Octicons
                name={isOpen ? "issue-opened" : "issue-closed"}
                size={16}
                color={Colors.white}
              />
              <Text style={styles.stateText}>{issue.state}</Text>
            </View>

            <Text style={styles.title}>{issue.title}</Text>

            <View style={styles.metaInfo}>
              <Image
                source={{ uri: issue.user.avatar_url }}
                style={styles.authorAvatar}
              />
              <Text style={styles.metaText}>
                <Text style={styles.authorName}>{issue.user.login}</Text> abriu
                em {new Date(issue.created_at).toLocaleDateString()}
              </Text>
            </View>
          </View>

          <View style={isLandscape ? { flex: 1 } : null}>
            <View
              style={[styles.bodyContainer, isLandscape && { marginTop: 0 }]}
            >
              <Text style={styles.bodyText}>
                {issue.body || "Nenhuma descrição fornecida."}
              </Text>
            </View>

            <View style={styles.footer}>
              <View style={styles.repoLink}>
                <Octicons name="repo" size={16} color={Colors.primary} />
                <Text style={styles.repoText}>
                  {issue.repository?.full_name || "GitHub Repository"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IssueDetailScreen;
