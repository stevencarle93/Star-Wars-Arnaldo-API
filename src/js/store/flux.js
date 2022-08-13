import {filmStore, filmsActions} from './films'

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [
			],
			...filmStore
		},
		actions: {
			fetchGetCharacter: async() => {
				const store = getStore();
				let response = await fetch("https://www.swapi.tech/api/people")
				response = await response.json()
				setStore({
					...store,
					characters: response
				});
			},
			...filmsActions
		}
	};
};

export default getState;
