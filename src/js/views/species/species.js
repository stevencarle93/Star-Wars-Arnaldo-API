import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Outlet } from "react-router-dom";

export default function Species() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadSpeciesDetails(params.speciesId);
  }, []);
  const { specie } = store;
  return (
    <div>
      <div className="card2" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {specie ? <h1>{specie.properties.name}</h1> : ""}
          </li>
          <li className="list-group-item">
            <div>
              <img
                src={
                  specie
                    ? `https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`
                    : ""
                }
                width="250"
                height="300"
              ></img>
            </div>
          </li>
          <li className="list-group-item">
            {" "}
            CLASSIFICATION:{" "}
            {specie ? <p>{specie.properties.classification}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            DESIGNATION: {specie ? (
              <p>{specie.properties.designation}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            AVERAGE HEIGHT:{" "}
            {specie ? <p>{specie.properties.orbital_period}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            AVERAGE LIFESPAN:{" "}
            {specie ? <p>{specie.properties.average_lifespan}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            HAIR COLORS: {specie ? (
              <p>{specie.properties.hair_colors}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            SKIN COLORS: {specie ? (
              <p>{specie.properties.skin_colors}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            EYE COLORS: {specie ? (
              <p>{specie.properties.eye_colors}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            LANGUAGE: {specie ? <p>{specie.properties.language}</p> : ""}{" "}
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
