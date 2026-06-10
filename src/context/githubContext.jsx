import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

const githubContext = createContext();

//TAREFA 5
export const GithubProvider = ({ children }) => {
  const { userToken } = useAuth();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userToken) {
      fetchUserData(userToken);
      fetchUserRepos(userToken);
      fetchIssues(userToken);
    }
  }, [userToken]);

  const fetchUserData = async (userToken) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${userToken}`,
        },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserRepos = async (userToken) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: `token ${userToken}`,
        },
      });
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error("Error fetching user repos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIssues = async (userToken) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.github.com/issues", {
        headers: {
          Authorization: `token ${userToken}`,
        },
      });
      const data = await response.json();
      setIssues(data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <githubContext.Provider
      value={{
        fetchUserData,
        fetchUserRepos,
        fetchIssues,
        userData,
        repos,
        issues,
        isLoading,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};

export default GithubProvider;

export function useGithubContext() {
  const context = useContext(githubContext);
  if (!context) {
    throw new Error("useGithubContext deve ser usado dentro de GithubProvider");
  }
  return context;
}
