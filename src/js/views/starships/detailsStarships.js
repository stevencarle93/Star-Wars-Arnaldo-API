import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function DetailsStarships() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadStarshipsDetails(params.starshipsId);
  }, []);
  const { starship } = store;
  return <>{starship ? <p>{starship.properties.name}</p> : ""}</>;
}
