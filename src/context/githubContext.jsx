import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

const githubContext = createContext();

//TAREFA 5
export const GithubProvider = ({ children }) => {
  const { userToken } = useAuth();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [repoPage, setRepoPage] = useState(1);
  const [hasMoreRepos, setHasMoreRepos] = useState(true);
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    if (userToken) {
      fetchUserData(userToken);
      fetchUserRepos(userToken, 1);
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

  const fetchUserRepos = async (token, page = 1) => {
    if (page === 1) {
      setIsLoading(true);
      setHasMoreRepos(true);
    } else {
      setIsFetchingMore(true);
    }

    try {
      const response = await fetch(
        `https://api.github.com/user/repos?page=${page}&per_page=10`,
        {
          headers: {
            Authorization: `token ${userToken}`,
          },
        },
      );
      const data = await response.json();

      if (data.length < 10) {
        setHasMoreRepos(false);
      }

      setRepos((prevRepos) => (page === 1 ? data : [...prevRepos, ...data]));
      setRepoPage(page);
    } catch (error) {
      console.error("Error fetching user repos:", error);
    } finally {
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  };

  const loadMoreRepos = () => {
    if (!isFetchingMore && hasMoreRepos && userToken) {
      fetchUserRepos(userToken, repoPage + 1);
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
        loadMoreRepos,
        fetchIssues,
        userData,
        repos,
        issues,
        isLoading,
        isFetchingMore,
        hasMoreRepos,
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
