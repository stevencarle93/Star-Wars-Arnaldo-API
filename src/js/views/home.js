import React, {useContext} from "react";
import {Context} from '../store/appContext'
import "../../styles/home.css";
import ListSpecies from '../component/species/listSpecies'

export const Home = () => {
	const {store, actions}=useContext(Context)
	
	return (
		<div className="text-center mt-5">
			<h1>APP Star Wars</h1>
			<ListSpecies species={store.species.results} />
		</div>
	)
};
