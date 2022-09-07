export const starshipsStore = {
  starships: [],
  starshipsFavorites: [],
};
export function starshipsActions(getStore, getActions, setStore) {
  return {
    loadStarshipsList: async () => {
      try {
        let response = await fetch("https://www.swapi.tech/api/starships");
        if (response.ok) response = await response.json();
        const store = getStore();
        setStore({
          ...store,
          starships: response.results,
        });
      } catch (error) {
        console.error(error);
      }
    },
    loadStarshipsDetails: async (uid) => {
      try {
        let response = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
        if (response.ok) response = await response.json();
        else return;
        console.log(response.result);
        const store = getStore();
        setStore({
          ...store,
          starship: response.result,
        });
      } catch (error) {
        console.error(error);
      }
    },
  };
}
