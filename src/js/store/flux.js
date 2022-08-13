import {filmStore, filmsActions} from './films'
import { speciesActions, speciesStore } from './species';
import {planetStore, planetsActions} from './planets'

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/*
			characters: [
			],*/
			...filmStore,
			...speciesStore,
			...planetStore
		},
		actions: {
			/*
			fetchGetCharacter: async() => {
				const store = getStore();
				let response = await fetch("https://www.swapi.tech/api/people")
				response = await response.json()
				setStore({
					...store,
					characters: response
				});
			},*/
			...filmsActions(getStore, getActions, setStore),
			...speciesActions(getStore, getActions, setStore),
			...planetsActions(getStore, getActions, setStore)
		}
	};
};

export default getState;
