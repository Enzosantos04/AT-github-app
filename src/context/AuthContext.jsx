import { createContext, useState } from "react";
//TAREFA 2
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (token) => {
    setUserToken(token);
    await AsyncStorage.setItem("userToken", token);
  };

  const signOut = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem("userToken");
  };

  useEffect(() => {
    const loadStorageData = async () => {
      const savedToken = await AsyncStorage.getItem("userToken");
      if (savedToken) {
        setUserToken(savedToken);
      }
    };
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }

  return context;
}
