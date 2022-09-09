import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Outlet } from "react-router-dom";

export default function Vehicles() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadVehiclesDetails(params.vehiclesId);
  }, []);
  const { vehicle } = store;
  return (
    <div>
      <div className="card2" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {vehicle ? <h1>{vehicle.properties.name}</h1> : ""}
          </li>
          <li className="list-group-item">
            <div>
              <img
                src={
                  vehicle
                    ? `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`
                    : ""
                }
                width="250"
                height="300"
              ></img>
            </div>
          </li>
          <li className="list-group-item">
            {" "}
            MODEL: {vehicle ? (
              <p>{vehicle.properties.classification}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            VEHICLE CLASS:{" "}
            {vehicle ? <p>{vehicle.properties.vehicle_class}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            MANUFACTURER:{" "}
            {vehicle ? <p>{vehicle.properties.manufacturer}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            COST IN CREDITS:{" "}
            {vehicle ? <p>{vehicle.properties.cost_in_credits}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            LENGTH : {vehicle ? <p>{vehicle.properties.length}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            CREW: {vehicle ? <p>{vehicle.properties.crew}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            PASSENGERS: {vehicle ? (
              <p>{vehicle.properties.passengers}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            MAX ATMOSPHERING SPEED:{" "}
            {vehicle ? (
              <p>{vehicle.properties.max_atmosphering_speed}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            HYPERDRIVE RATING:{" "}
            {vehicle ? (
              <p>{vehicle.properties.hyperdrive_rating}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            MGLT: {vehicle ? <p>{vehicle.properties.MGLT}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            CARGO CAPACITY:{" "}
            {vehicle ? <p>{vehicle.properties.cargo_capacity}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            CONSUMABLES:{" "}
            {vehicle ? <p>{vehicle.properties.consumables}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            PILOTS: {vehicle ? <p>{vehicle.properties.pilots}</p> : ""}{" "}
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}