import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles as globalStyles } from "../styles/Main.styles";
import { localStyles } from "../styles/ProfileScreen.styles";
import { Colors } from "../styles/theme";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { useGithubContext } from "../context/githubContext";
import { Image } from "react-native";

//TAREFA 4
const ProfileScreen = () => {
  const { signOut, updateToken, userToken } = useAuth();
  const { userData, isLoading } = useGithubContext();
  const [userNewToken, setUserNewToken] = useState(userToken);

  function handleUpdateToken() {
    updateToken(userNewToken);
  }

  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={localStyles.header}>
        <View style={localStyles.avatarContainer}>
          <View style={localStyles.avatarPlaceholder}>
            {userData?.avatar_url ? (
              <Image
                source={{ uri: userData.avatar_url }}
                style={localStyles.avatar}
              />
            ) : (
              <Octicons name="person" size={60} color={Colors.inkMuted} />
            )}
          </View>
        </View>
        <Text style={localStyles.userName}>
          {userData?.name || "GitHub User"}
        </Text>
        <Text style={localStyles.userHandle}>
          {userData?.login ? `@${userData.login}` : "@username"}
        </Text>
      </View>

      <View style={localStyles.configCard}>
        <View style={localStyles.cardHeader}>
          <Octicons name="key" size={18} color={Colors.primary} />
          <Text style={localStyles.cardTitle}>GitHub Authentication</Text>
        </View>

        <Text style={localStyles.description}>
          Update your Personal Access Token to refresh your connection with
          GitHub services.
        </Text>

        <Input
          label="Personal Access Token"
          placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
          value={userNewToken}
          onChangeText={setUserNewToken}
          secureTextEntry
        />

        <Button
          title="Update Token"
          onPress={handleUpdateToken}
          loading={isLoading}
        />

        <Text style={localStyles.helperText}>
          You can generate a new token in your GitHub Developer Settings.
        </Text>
      </View>

      <View style={localStyles.actionsContainer}>
        <Button
          title="Sign Out"
          type="secondary"
          onPress={signOut}
          icon={<Octicons name="sign-out" size={16} color={Colors.primary} />}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
