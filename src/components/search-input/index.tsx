import * as React from "react";

const SearchInput = (props: React.HTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      id="search-wrapper"
      className="flex justify-center align-center self-center m-auto"
      {...props}
    >
      <div className="input-wrapper w-full mt-8 mb-4">
        <input
          name="search-input"
          className="my-4 w-full p-4 rounded-sm bg-transparent border-4 border-gray-800 text-white"
          placeholder="Insert username"
        />
      </div>
    </div>
  );
};

export default SearchInput;
