import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <ul className="nav-links">
            <li>
              <Link to="/favouritelist">Favourite List</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
