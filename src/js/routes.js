import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import Planets from "./views/planets/planets";
import People from "./views/people/people";
import ListVehicles from "./component/vehicles/listvehicles";
import Species from "./views/species";
import DetailsSpecies from "./views/species/detailsSpecies";
import ViewSpecies from "./views/species/viewSpecies";
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
                            <Route  path="planets" element={<Planets />} />
                            <Route  path="people" element={<People />} />
                            <Route path="species" element={<Species />}>
                                <Route default element={<ViewSpecies />} />
                                <Route path=":speciesId" element={<DetailsSpecies />} />
                            </Route>
                            <Route exact path="vehicles" element={<ListVehicles />} />
                            <Route exact path="films" element={<Films />} />
                            <Route exact path="starships" element={<Starships />} />
                        </Route>
                </Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(AppRoutes);