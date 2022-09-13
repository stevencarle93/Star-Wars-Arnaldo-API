import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function ListFilms() {
  const { store, actions } = useContext(Context);
  const addFavorites = (item) => {
    actions.addFavorites({
      id: item.id,
      name: item.properties.title,
      type: "films",
    });
  };
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
                <h5 className="card-title" id="Film_title">
                  {film.properties.title}
                </h5>
                <Link to={`/films/${film.uid}`} className="btn btn-primary">
                  Details
                </Link>
                <button type='button' className='btn btn-warning mx-4' onClick={()=>addFavorites(film)}>❤</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
