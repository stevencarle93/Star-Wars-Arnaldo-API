export const planetStore = {
  planets: [],
  planetsFavorite: [],
};

export function planetsActions(getStore, getActions, setStore) {
  return {
    loadPlanetsList: async () => {
      try {
        let response = await fetch("https://www.swapi.tech/api/planets");
        if (response.ok) response = await response.json();
        const store = getStore();
        setStore({
          ...store,
          planets: response.results,
        });
      } catch (error) {
        console.error(error);
      }
    },
    loadPlanetsDetails: async (uid) => {
      try {
        let response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
        if (response.ok) response = await response.json();
        else return;
        console.log(response.result);
        const store = getStore();
        setStore({
          ...store,
          planet: response.result,
        });
      } catch (error) {
        console.error(error);
      }
    },
  };
}
