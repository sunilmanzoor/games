import React from "react";

// we can do onclick as well by calling onclick on button
// and creating a refrence of input because it is a stateless functional component

const SearchBar = (props) => {
  return (
    <form className="search-wrapper cf">
      <input
        type="text"
        name="search"
        onChange={(e) => props.onSearch(e.currentTarget.value)}
        style={{ paddingLeft: "20px" }}
      />
      <button type="button">
        <span className="">
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-search"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            />
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
          </svg>
        </span>
      </button>
    </form>
  );
};

export default SearchBar;
