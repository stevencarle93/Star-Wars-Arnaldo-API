import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function ListStarships() {
  const { store, actions } = useContext(Context);
  const addFavorites = (item) => {
    actions.addFavorites({id:item.id, name:item.name, type:"starships"})
}
  return (
    <ul className="list-group list-group-horizontal overflow-auto mb-5">
      {store.starships.map((starships, index) => {
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
                <button type='button' className='btn btn-warning mx-4' onClick={()=>addFavorites(starships)}>❤</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
