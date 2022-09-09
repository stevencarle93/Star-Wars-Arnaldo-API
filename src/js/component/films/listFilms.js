import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function ListFilms() {
  const { store, actions } = useContext(Context);

  return (
    <ul className="list-group list-group-horizontal overflow-auto mb-5">
      {store.films.map((film, index) => {
        return (
          <li key={index} className="list-group-item bg-black">
            <div className="card bg-black" style={{ width: "18rem" }}>
              <Link to={`/films/${film.uid}`} className="">
                <img
                  src={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title" id = "Film_title">{film.properties.title}</h5>
                <Link to={`/films/${film.uid}`} className="btn btn-primary">
                  Details
                </Link>
                <p>   </p>
                <div className="btn btn-primary">
                  Save
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
