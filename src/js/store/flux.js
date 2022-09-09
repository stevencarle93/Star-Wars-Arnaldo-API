import {filmStore, filmsActions} from './films'
import { speciesActions, speciesStore } from './species'
import { peopleActions, peopleStore } from './people'
import { planetStore, planetsActions } from './planets'
import { starshipsStore, starshipsActions } from './starships'
import { vehiclesStore, vehiclesActions } from './vehicles'
import { favoritosActions, favoritosStore } from './favoritos';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/*
			characters: [
			],*/
			...filmStore,
			...peopleStore,
			...speciesStore,
			...planetStore,
			...starshipsStore,
			...vehiclesStore,
			...favoritosStore
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
			...peopleActions(getStore, getActions, setStore),
			...starshipsActions(getStore, getActions, setStore),
			...planetsActions(getStore, getActions, setStore),
			...vehiclesActions(getStore, getActions, setStore),
			...favoritosActions(getStore, getActions, setStore)
		}
	};
};

export default getState;
