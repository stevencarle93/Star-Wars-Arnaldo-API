import React, {useContext} from "react";
import {Context} from '../store/appContext'
import "../../styles/home.css";
import ListSpecies from '../component/species/listSpecies'
import ListFilms from '../component/films/listFilms'
import ListPeople from '../component/people/listPeople'
import ListPlanets from "../component/planets/listPlanets";

export const Home = () => {
	const {store, actions}=useContext(Context)
	
	return (
		<div className="text-center mt-5 bg-black">
			<h1 id ="title">APP Star Wars</h1>
			<ListSpecies />
			<ListFilms />
			<ListPeople />
			<ListPlanets />
		</div>

	)
};
