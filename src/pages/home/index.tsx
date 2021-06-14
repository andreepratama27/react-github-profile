import * as React from "react";
import { getUserProfile, getUserRepositories } from "../../api";
import { Loader, SearchInput, UserCard, UserHeader } from "../../components";
import { User } from "../../models/_users";

const Home = () => {
  const [username, setUsername] = React.useState("");
  const [profile, setProfile] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);

  const onKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchProfile();
    }
  };

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setProfile(null);

      const result = await getUserProfile(username);
      setProfile(result);
    } catch (err) {
      console.error("Error ", err);
    } finally {
      setLoading(false);
      fetchUserRepos();
    }
  };

  const fetchUserRepos = async () => {
    try {
      setLoading(true);
      setProfile(null);

      const result = await getUserRepositories(username);
      console.log("Repos ", result);
    } catch (err) {
      console.error("Error ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-1/2 mx-auto">
      <SearchInput onChange={onKeyChange} onKeyDown={onKeyDown} />

      <div id="search-result">
        {loading && <Loader />}
        {profile && <UserHeader {...profile} />}

        <div id="empty-state">
          <p className="text-white text-gray-500 text-center text-xl">
            Your search result will shown here
          </p>
        </div>

        {/* <div id="user-repository" className="grid grid-cols-2 gap-4">
          {Array(5)
            .fill("")
            .map((i, key) => (
              <UserCard key={key} />
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default Home;
