import * as React from "react";
import { User } from "../../models/_users";

const UserHeader = ({ name, login, location }: User) => {
  return (
    <div id="user-badge" className="mb-8">
      <div className="flex flex-col items-center p-4">
        <p className="text-white text-xl">
          {name} (@{login})
        </p>
        <p className="text-white text-lg">{location}</p>
      </div>
    </div>
  );
};

export default UserHeader;
