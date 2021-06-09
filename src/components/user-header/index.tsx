import * as React from "react";

const UserHeader = () => {
  return (
    <div id="user-badge" className="mb-8">
      <div className="flex flex-col items-center p-4">
        <p className="text-white text-xl">
          Andre Pratama (@andreepratama27)
        </p>
        <p className="text-white text-lg">
          andreepratama27@gmail.com
        </p>
      </div>
    </div>
  );
};

export default UserHeader;
