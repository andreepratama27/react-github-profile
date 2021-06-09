import * as React from "react";

const UserCard = () => {
  return (
    <div className="w-full p-4 rounded-sm bg-gray-800">
      <div className="user-repository__header flex flex-row w-full justify-between">
        <div className="category-list">
          <ul className="flex flex-row">
            <li className="mr-4 text-gray-400">0 Fork</li>
            <li className="mr-4 text-gray-400">0 Star</li>
          </ul>
        </div>
        <div className="category-badge bg-gray-600 px-2 rounded-sm">
          <p className="text-gray-400">Javascript</p>
        </div>
      </div>
      <p className="text-lg text-white">Repository Name</p>
    </div>
  );
};

export default UserCard;
