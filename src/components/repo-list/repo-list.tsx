import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import { UserCard } from "components";
import { getUserRepositories } from "api";
import { Repo } from "models/_repos";
import { useCallback } from "react";

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
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [errorTrigger, setErrorTrigger] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);

        const response = await getUserRepositories(username, page);
        setRepos((prevState) => [...prevState, ...response]);
        setHasMore(response.length > 0);
      } catch (error) {
        setErrorTrigger(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [page]);

  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      const [firstElement] = entries;

      if (firstElement.isIntersecting) {
        setPage((prevState) => prevState + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  return (
    <div id="search-result">
      {repos.length ? (
        <div
          id="user-repository"
          className="grid grid-cols-2 gap-4 bg-scroll mb-10"
        >
          {repos?.map((repo: Repo, index) => (
            <UserCard
              ref={repos.length === index + 1 ? lastElementRef : null}
              key={index}
              {...repo}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {loading && (
        <div className="w-full h-20 flex justify-center items-center">
          <h1 className="text-white">Loading</h1>
        </div>
      )}
    </div>
  );
};

export default RepoList;
