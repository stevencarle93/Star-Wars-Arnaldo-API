export const speciesStore = {
  species: [],
  speciesFavorites: [],
};

export function speciesActions(getStore, getActions, setStore) {
  return {
    loadSpeciesList: async () => {
      try {
        let response = await fetch("https://www.swapi.tech/api/species");
        if (response.ok) response = await response.json();
        const store = getStore();
        setStore({
          ...store,
          species: response.results,
        });
      } catch (error) {
        console.error(error);
      }
    },
    loadSpeciesDetails: async (uid) => {
      try {
        let response = await fetch(`https://www.swapi.tech/api/species/${uid}`);
        if (response.ok) response = await response.json();
        else return;
        console.log(response.result);
        const store = getStore();
        setStore({
          ...store,
          specie: response.result,
        });
      } catch (error) {
        console.error(error);
      }
    },
  };
}
