import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Outlet } from 'react-router-dom'

export default function Planets(){
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(async () => {
      await actions.loadPlanetsDetails(params.planetsId);
    }, []);
    const { planet } = store;
    return (
        <div>
        <div className="card2" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {planet ? <h1>{planet.properties.name}</h1> : ""}
            </li>
            <li className="list-group-item">
            <div>
              <img
                src={planet ? `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg` : ""}
                width="250"
                height="300"></img>
            </div>
          </li>
            <li className="list-group-item">
              {" "}
              DIAMETER: {planet ? <p>{planet.properties.diameter}</p> : ""}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              ROTATION PERIOD: {planet ? <p>{planet.properties.rotation_period}</p> : ""}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              ORBITAL PERIOD: {planet ? (
                <p>{planet.properties.orbital_period}</p>
              ) : (
                ""
              )}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              GRAVITY: {planet ? (
                <p>{planet.properties.gravity}</p>
              ) : (
                ""
              )}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              POPULATION: {planet ? (
                <p>{planet.properties.population}</p>
              ) : (
                ""
              )}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              CLIMATE: {planet ? (
                <p>{planet.properties.climate}</p>
              ) : (
                ""
              )}{" "}
            </li>
            <li className="list-group-item">
              {" "}
              TERRAIN: {planet ? (
                <p>{planet.properties.terrain}</p>
              ) : (
                ""
              )}{" "}
            </li>
          </ul>
        </div>
        <Outlet />
      </div>)
}