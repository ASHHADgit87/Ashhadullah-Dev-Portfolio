const GITHUB_USERNAME = "ASHHADgit87";
const BASE = "https://api.github.com";

export const fetchGitHubStats = async () => {
  const headers: HeadersInit = import.meta.env.VITE_GITHUB_TOKEN
    ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
    : {};

  const [userRes, reposRes] = await Promise.all([
    fetch(`${BASE}/users/${GITHUB_USERNAME}`, { headers }),
    fetch(`${BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers,
    }),
  ]);

  const user = await userRes.json();
  const repos = await reposRes.json();

  const pinned = Array.isArray(repos)
    ? repos
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
    : [];

  return {
    publicRepos: user.public_repos ?? 0,
    followers: user.followers ?? 0,
    pinned,
  };
};
