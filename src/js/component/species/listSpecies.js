import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function ListSpecies() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
	const URL = 'https://www.swapi.tech/api'
  return (
    <ul className="list-group list-group-horizontal overflow-auto mb-5">
      {store.species.map((specie, index) => {
        let itsFavorite = store.favoritos.some((val) => val.ident == specie.url.substr(URL.length).replace(specie.uid,"") + specie.uid)
        return (
          <li key={index} className="list-group-item bg-black">
            <div className="card bg-black" style={{ width: "18rem" }}>
              <Link to={`/species/${specie.uid}`} className="">
                <img
                  src={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title" id = "Specie_name">{specie.name}</h5>
                <Link to={`/species/${specie.uid}`} className="btn btn-primary">
                  Details
                </Link>
                <p>   </p>
                <button onClick = {() => actions.addFavorites(specie.url.substr(URL.length).replace(specie.uid,""), specie)} className = "border-0 bg-transparent fs-3 text-warning p-0"> 
										<i className = {`${itsFavorite? "fa-solid":"fa-regular"} fa-bookmark`}/>
									</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
