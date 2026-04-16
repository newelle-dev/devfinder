import { useState } from 'react';
import { GithubService } from '../services/github';

export function useGithubUser() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  
  const searchUser = async (e, forcedUsername = null) => {
    if (e && e.preventDefault) e.preventDefault();
    
    setError("");
    const targetUsername = forcedUsername || username;
    const trimmed = targetUsername ? targetUsername.trim() : "";
    
    if (!trimmed) {
      setError("Please enter a GitHub username");
      return;
    }

    setHasSearched(true);
    setIsLoading(true);
    try {
      const data = await GithubService.getUser(trimmed);
      if (!data) {
        setError("User not found");
        setUser(null);
        return;
      }
      setUser(data);
    } catch (err) {
      setError(err?.message || "An error occurred");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { 
    username, 
    setUsername, 
    user, 
    setUser,
    isLoading, 
    error, 
    hasSearched,
    searchUser 
  };
}