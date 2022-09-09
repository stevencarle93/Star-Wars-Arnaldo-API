import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Outlet } from "react-router-dom";

export default function Starships() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadStarshipsDetails(params.starshipsId);
  }, []);
  const { starship } = store;
  return (
    <div>
      <div className="card2" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {starship ? <h1>{starship.properties.name}</h1> : ""}
          </li>
          <li className="list-group-item">
            <div>
              <img
                src={
                  starship
                    ? `https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`
                    : ""
                }
                width="250"
                height="300"
              ></img>
            </div>
          </li>
          <li className="list-group-item">
            {" "}
            MODEL: {starship ? (
              <p>{starship.properties.classification}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            STARSHIP CLASS:{" "}
            {starship ? <p>{starship.properties.starship_class}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            MANUFACTURER:{" "}
            {starship ? <p>{starship.properties.manufacturer}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            COST IN CREDITS:{" "}
            {starship ? <p>{starship.properties.cost_in_credits}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            LENGTH : {starship ? <p>{starship.properties.length}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            CREW: {starship ? <p>{starship.properties.crew}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            PASSENGERS: {starship ? (
              <p>{starship.properties.passengers}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            MAX ATMOSPHERING SPEED:{" "}
            {starship ? (
              <p>{starship.properties.max_atmosphering_speed}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            HYPERDRIVE RATING:{" "}
            {starship ? (
              <p>{starship.properties.hyperdrive_rating}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            MGLT: {starship ? <p>{starship.properties.MGLT}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            CARGO CAPACITY:{" "}
            {starship ? <p>{starship.properties.cargo_capacity}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            CONSUMABLES:{" "}
            {starship ? <p>{starship.properties.consumables}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            PILOTS: {starship ? <p>{starship.properties.pilots}</p> : ""}{" "}
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
