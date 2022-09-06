import React, {useContext} from "react";
import {Context} from '../store/appContext'
import "../../styles/home.css";
import ListSpecies from '../component/species/listSpecies'
import ListFilms from '../component/films/listFilms'
import ListPeople from '../component/people/listPeople'
import ListPlanets from "../component/planets/listPlanets";
import ListStarships from "../component/startships/listStartships";
import ListVehicles from "../component/vehicles/listvehicles";

export const Home = () => {
	const {store, actions}=useContext(Context)
	
	return (
		<div className="text-center mt-5 bg-black">
			<h1 id ="title">SPECIES</h1>
			<ListSpecies />
			<h1 id ="title">FILMS</h1>
			<ListFilms />
			<h1 id ="title">PEOPLE</h1>
			<ListPeople />
			<h1 id ="title">PLANETS</h1>
			<ListPlanets />
			<h1 id ="title">STARSHIPS</h1>
			<ListStarships />
			<h1 id ="title">VEHICLES</h1>
			<ListVehicles />
		</div>

	)
};
