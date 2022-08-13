import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Planets from "./views/planets/planets";
import People from "./views/people/people";
import ListVehicles from "./component/vehicles/listvehicles";
import Species from "./views/species";
import DetailsSpecies from "./views/species/detailsSpecies";
import Starships from "./views/starships/starships";
import Films from "./views/films/films";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" component={Home} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/people" component={People} />
						<Route path="/species">
							<Route default component={Species} />
							<Route path=":speciesId" component={DetailsSpecies} />
						</Route>
						<Route exact path="/vehicles" component={ListVehicles} />
						<Route exact path="/films" component={Films} />
						<Route exact path="/starships" component={Starships} />

					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
