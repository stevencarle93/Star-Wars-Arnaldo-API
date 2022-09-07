import React from "react";
import { Outlet } from "react-router-dom";

export default function Starships() {
  return (
    <div>
      <h1>Starships</h1>
      <Outlet />
    </div>
  );
}
