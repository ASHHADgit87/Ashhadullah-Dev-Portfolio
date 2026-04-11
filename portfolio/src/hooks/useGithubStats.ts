import { useState, useEffect } from "react";
import { fetchGitHubStats } from "@/lib/github";

interface GitHubStats {
  publicRepos: number;
  followers: number;
  pinned: any[];
  loading: boolean;
  error: string | null;
}

export const useGitHubStats = (): GitHubStats => {
  const [data, setData] = useState({
    publicRepos: 0,
    followers: 0,
    pinned: [] as any[],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubStats()
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { ...data, loading, error };
};
