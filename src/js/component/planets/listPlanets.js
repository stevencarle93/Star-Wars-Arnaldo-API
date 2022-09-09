import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function ListPlanets() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
	const URL = 'https://www.swapi.tech/api'
  return (
    <ul className="list-group list-group-horizontal overflow-auto mb-5">
      {store.planets.map((planets, index) => {
        let itsFavorite = store.favoritos.some((val) => val.ident == planets.url.substr(URL.length).replace(planets.uid,"") + planets.uid)
        return (
          <li key={index} className="list-group-item bg-black">
            <div className="card bg-black" style={{ width: "18rem" }}>
              <Link to={`/planets/${planets.uid}`} className="">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title" id = "Planet_name">{planets.name}</h5>
                <Link to={`/planets/${planets.uid}`} className="btn btn-primary">
                  Details
                </Link>
                <p>   </p>
                <button onClick = {() => actions.addFavorites(planets.url.substr(URL.length).replace(planets.uid,""), planets)} className = "border-0 bg-transparent fs-3 text-warning p-0"> 
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
