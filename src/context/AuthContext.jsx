import { createContext, useState, useEffect, useContext } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TAREFA 2 & 15
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (token) => {
    try {
      setUserToken(token);
      await AsyncStorage.setItem("userToken", token);
    } catch (error) {
      Alert.alert("Erro de Login", "Não foi possível salvar suas credenciais.");
    }
  };

  const signOut = async () => {
    try {
      setUserToken(null);
      await AsyncStorage.removeItem("userToken");
    } catch (error) {
      Alert.alert("Erro de Logout", "Não foi possível remover suas credenciais.");
    }
  };

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const savedToken = await AsyncStorage.getItem("userToken");
        if (savedToken) {
          setUserToken(savedToken);
        }
      } catch (error) {
        console.error("Erro ao carregar token:", error);
      }
    };
    loadStorageData();
  }, []);

  const updateToken = async (token) => {
    if (!token) {
      Alert.alert("Erro", "O token não pode estar vazio.");
      return;
    }
    
    try {
      setUserToken(token);
      await AsyncStorage.setItem("userToken", token);
      Alert.alert("Sucesso", "Seu Personal Access Token foi atualizado!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o token.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ userToken, isLoading, signIn, signOut, updateToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }

  return context;
}
