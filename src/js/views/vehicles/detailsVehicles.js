import { resolveConfig } from "prettier";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function DetailsVehicles() {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadVehiclesDetails(params.vehiclesId);
  }, []);
  const { vehicle } = store;
  return <>{vehicle ? <p>{vehicle.properties.name}</p> : ""}</>;
}
