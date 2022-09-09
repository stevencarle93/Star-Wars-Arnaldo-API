import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Outlet } from "react-router-dom";

export default function People() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadPeopleDetails(params.peopleId);
  }, []);
  const { person } = store;

  return (
    <div>
      <div className="card2" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {person ? <h1>{person.properties.name}</h1> : ""}
          </li>
          <li className="list-group-item">
            <div>
              <img
                src={person ? `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg` : ""}
                width="250"
                height="300"></img>
            </div>
          </li>
          <li className="list-group-item">
            {" "}
            HEIGHT: {person ? <p>{person.properties.height}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            MASS: {person ? <p>{person.properties.mass}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            HAIR COLOR: {person ? (
              <p>{person.properties.hair_color}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            SKIN COLOR: {person ? (
              <p>{person.properties.skin_color}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            EYE COLOR: {person ? (
              <p>{person.properties.eye_color}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            BIRTH YEAR: {person ? (
              <p>{person.properties.birth_year}</p>
            ) : (
              ""
            )}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            GENDER: {person ? (
              <p>{person.properties.gender}</p>
            ) : (
              ""
            )}{" "}
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
