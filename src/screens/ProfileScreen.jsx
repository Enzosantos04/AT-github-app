import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { styles as globalStyles } from "../styles/Main.styles";
import { localStyles } from "../styles/ProfileScreen.styles";
import { Colors } from "../styles/theme";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

//TAREFA 4
const ProfileScreen = () => {
  const { signOut, updateToken } = useAuth();
  const [userToken, setUserToken] = useState("");

  function handleUpdateToken() {
    updateToken(userToken);
  }

  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={localStyles.header}>
        <View style={localStyles.avatarContainer}>
          <View style={localStyles.avatarPlaceholder}>
            <Octicons name="person" size={60} color={Colors.inkMuted} />
          </View>
        </View>
        <Text style={localStyles.userName}>GitHub User</Text>
        <Text style={localStyles.userHandle}>@username_placeholder</Text>
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
          value={userToken}
          onChangeText={setUserToken}
        />

        <Button title="Update Token" onPress={handleUpdateToken} />

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
