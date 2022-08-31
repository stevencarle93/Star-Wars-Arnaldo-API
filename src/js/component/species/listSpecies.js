import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function ListSpecies() {
  const { store, actions } = useContext(Context);
  return (
    <ul className="list-group list-group-horizontal overflow-auto">
      {store.species.map((specie, index) => {
        return (
          <li key={index} className="list-group-item">
            <div className="card" style={{ width: "18rem" }}>
              <Link to={`/species/${specie.uid}`} className="">
                <img
                  src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{specie.name}</h5>
                <Link to={`/species/${specie.uid}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
