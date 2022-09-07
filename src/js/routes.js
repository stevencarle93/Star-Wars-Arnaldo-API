import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import Planets from "./views/planets/planets";
import People from "./views/people/people";
import Vehicles from "./views/vehicles/vehicles";
import Species from "./views/species/species";
import DetailsFilms from "./views/films/detailsFilms";
import DetailsSpecies from "./views/species/detailsSpecies";
import DetailsPlanets from "./views/planets/detailsPlanets";
import DetailsPeople from "./views/people/detailsPeople";
import DetailsStarships from "./views/starships/detailsStarships";
import DetailsVehicles from "./views/vehicles/detailsVehicles";
import ViewStarships from "./views/starships/viewStarships";
import ViewSpecies from "./views/species/viewSpecies";
import ViewPlanets from "./views/planets/viewPlanets";
import ViewPeople from "./views/people/viewPeople";
import ViewVehicles from "./views/vehicles/viewVehicles";
import ViewFilms from "./views/films/viewFilms";
import Starships from "./views/starships/starships";
import Films from "./views/films/films";
import Layout from "./layout";

import injectContext from "./store/appContext";

//create your first component
const AppRoutes = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="planets" element={<Planets />}>
              <Route index element={<ViewPlanets />} />
              <Route path=":planetsId" element={<DetailsPlanets />} />
            </Route>
            <Route path="people" element={<People />}>
              <Route index element={<ViewPeople />} />
              <Route path=":peopleId" element={<DetailsPeople />} />
            </Route>
            <Route path="species" element={<Species />}>
              <Route index element={<ViewSpecies />} />
              <Route path=":speciesId" element={<DetailsSpecies />} />
            </Route>
            <Route exact path="vehicles" element={<Vehicles />}>
              <Route index element={<ViewVehicles />} />
              <Route path=":vehiclesId" element={<DetailsVehicles />} />
            </Route>
            <Route exact path="films" element={<Films />}>
              <Route index element={<ViewFilms />} />
              <Route path=":filmsId" element={<DetailsFilms />} />
            </Route>
            <Route exact path="starships" element={<Starships />}>
              <Route index element={<ViewStarships />} />
              <Route path=":starshipsId" element={<DetailsStarships />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(AppRoutes);
