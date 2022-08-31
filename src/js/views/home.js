import React, {useContext} from "react";
import {Context} from '../store/appContext'
import "../../styles/home.css";
import ListSpecies from '../component/species/listSpecies'
import ListFilms from '../component/films/listFilms'

export const Home = () => {
	const {store, actions}=useContext(Context)
	
	return (
		<div className="text-center mt-5">
			<h1 id ="title">APP Star Wars</h1>
			<ListSpecies />
			<ListFilms />
		</div>

	)
};
