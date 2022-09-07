import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";


export default function ListVehicles() {
  const { store, actions } = useContext(Context);

  return (
    <ul className="list-group list-group-horizontal overflow-auto mb-5">
      {store.vehicles.map((vehicles, index) => {
        return (
          <li key={index} className="list-group-item bg-black">
            <div className="card bg-black" style={{ width: "18rem" }}>
              <Link to={`/vehicles/${vehicles.uid}`} className="">
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title" id = "Vehicles_name">{vehicles.name}</h5>
                <Link to={`/vehicles/${vehicles.uid}`} className="btn btn-primary">
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
