import * as React from "react";
import { SearchInput, UserCard, UserHeader } from "../../components";

const Home = () => {
  return (
    <div className="md:w-1/2 mx-auto">
      <SearchInput />

      <div id="search-result">
        <UserHeader />

        <div id="user-repository" className="grid grid-cols-2 gap-4">
          {Array(5)
            .fill("")
            .map((i, key) => (
              <UserCard key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
