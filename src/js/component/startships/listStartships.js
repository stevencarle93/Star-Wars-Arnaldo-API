import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function ListStarships() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const URL = "https://www.swapi.tech/api";
  return (
    <ul className="list-group list-group-horizontal overflow-auto mb-5">
      {store.starships.map((starships, index) => {
        let itsFavorite = store.favoritos.some(
          (val) =>
            val.ident ==
            starships.url.substr(URL.length).replace(starships.uid, "") +
              starships.uid
        );
        return (
          <li key={index} className="list-group-item bg-black">
            <div className="card bg-black" style={{ width: "18rem" }}>
              <Link to={`/starships/${starships.uid}`} className="">
                <img
                  src={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title" id="Starships_name">
                  {starships.name}
                </h5>
                <Link
                  to={`/starships/${starships.uid}`}
                  className="btn btn-primary"
                >
                  Details
                </Link>
                <p> </p>
                <button
                  onClick={() =>
                    actions.addFavorites(
                      starships.url.substr(URL.length).replace(starships.uid, ""),
                      starships
                    )
                  }
                  className="border-0 bg-transparent fs-3 text-warning p-0"
                >
                  <i
                    className={`${
                      itsFavorite ? "fa-solid" : "fa-regular"
                    } fa-bookmark`}
                  />
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
