import React from "react";
import { GAME_CATEGORY } from "../../config/constants";

const NewFilter = (props) => {
  let classes =
    props.category.toLowerCase(GAME_CATEGORY.NEW) ===
    GAME_CATEGORY.NEW.toLowerCase()
      ? "selected clickable"
      : "not-selected clickable";
  return (
    <table onClick={() => props.onFilter(GAME_CATEGORY.NEW)}>
      <tbody className={classes}>
        <tr>
          <td>
            <span className="">
              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                className="bi bi-bookmark-dash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                />
                <path
                  fillRule="evenodd"
                  d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </span>
          </td>
        </tr>
        <tr>
          <td className="filter-icon-text">New</td>
        </tr>
      </tbody>
    </table>
  );
};

export default NewFilter;
