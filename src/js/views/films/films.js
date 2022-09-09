import React, { useContext, useEffect, useState } from "react";
import { resolveConfig } from "prettier";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function Films() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadFilmsDetails(params.filmsId);
  }, []);
  const { film } = store;
  /*          <li className="list-group-item">
            <div>
              <img
                src={film ? `https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg` : ""}
                width="150"
                height="90"></img>
            </div>
          </li>*/
  return (
    <div>
      <div className="card2" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {film ? <h1>{film.properties.title}</h1> : ""}
          </li>
          <li className="list-group-item">
            <div>
              <img
                src={film ? `https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg` : ""}
                width="250"
                height="300"></img>
            </div>
          </li>
          <li className="list-group-item">
            {" "}
            {film ? <p>{film.properties.opening_crawl}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            PRODUCER: {film ? <p>{film.properties.producer}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            EPISODE: {film ? <p>{film.properties.episode_id}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            DIRECTOR: {film ? <p>{film.properties.director}</p> : ""}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            RELEASE DATE: {film ? (
              <p>{film.properties.release_date}</p>
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
