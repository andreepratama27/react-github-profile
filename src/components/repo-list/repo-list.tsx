import React, { useEffect, useState } from "react";
import { UserCard } from "../../components";
import { getUserRepositories } from "../../api";
import { Repo } from "../../models/_repos";

export const RepoListFallback = () => (
  <div>
    <p className="text-yellow-500 text-lg">Repo Fallback</p>
  </div>
);

const EmptyState = () => {
  return (
    <div id="empty-state">
      <p className="text-gray-500 text-center text-xl">
        Your search result will shown here
      </p>
    </div>
  );
};

const RepoList = ({ username }: { username: string }) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await getUserRepositories(username);
        setRepos(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div id="search-result">
      {repos.length ? (
        <div id="user-repository" className="grid grid-cols-2 gap-4 bg-scroll">
          {repos?.map((repo: Repo, key) => (
            <UserCard key={key} {...repo} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default RepoList;
