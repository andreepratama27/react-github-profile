import * as React from "react";
import { Loader, SearchInput } from "components";
import { UserHeaderFallback } from "components/user-header/user-header";
import { RepoListFallback } from "components/repo-list/repo-list";

const UserHeader = React.lazy(() => import("components/user-header"));
const RepoList = React.lazy(() => import("components/repo-list"));

const Home = () => {
  const loading = false;
  const [tempUsername, setTempUsername] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");

  const onKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempUsername(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setUsername(tempUsername);
    }
  };

  return (
    <div className="md:w-1/3 mx-auto">
      <SearchInput onChange={onKeyChange} onKeyDown={onKeyDown} />

      <div id="search-result">
        {loading && <Loader />}

        {username && (
          <>
            <React.Suspense fallback={UserHeaderFallback}>
              <UserHeader username={username} />
            </React.Suspense>

            <React.Suspense fallback={RepoListFallback}>
              <RepoList username={username} />
            </React.Suspense>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
