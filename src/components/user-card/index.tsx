import * as React from "react";
import { Repo } from "models/_repos";

const UserCard = React.forwardRef<HTMLDivElement, Repo>((props, ref) => {
  const { forks_count, stargazers_count, name, language } = props;

  return (
    <div ref={ref} className="w-full p-4 rounded-sm bg-gray-800">
      <div className="user-repository__header flex flex-row w-full justify-between">
        <div className="category-list">
          <ul className="flex flex-row">
            <li className="mr-4 text-gray-400">{forks_count} Fork</li>
            <li className="mr-4 text-gray-400">{stargazers_count} Star</li>
          </ul>
        </div>
        {language && (
          <div className="category-badge bg-gray-600 px-2 rounded-sm">
            <p className="text-gray-400">{language}</p>
          </div>
        )}
      </div>
      <p className="text-lg text-white">{name}</p>
    </div>
  );
});

UserCard.displayName = "UserCard";

export default UserCard;
