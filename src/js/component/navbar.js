import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-black">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1041px-Star_Wars_Logo.svg.png"
          width="150"
          height="90"
          alt="Home"
        />
      </Link>
      <div className="dropdown favoritos">
        <button
          className="btn btn-warning dropdown"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos
        </button>
        <ul
          className="dropdown-menu bg-black"
          aria-labelledby="dropdownMenuButton1"
        >
          {store.favorites.map((fav, index) => {
            return (
              <li
                className="text-white"
                onClick={() => actions.removeFavorites(index)}
              >
                {fav.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
