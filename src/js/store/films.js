export const filmStore = {
  films: [],
  filmFavorite: [],
};

export function filmsActions(getStore, getActions, setStore) {
  return {
    loadFilmsList: async () => {
      try {
        let response = await fetch("https://www.swapi.tech/api/films");
        if (response.ok) response = await response.json();
        const store = getStore();
        setStore({
          ...store,
          films: response.result,
        });
      } catch (error) {
        console.error(error);
      }
    },
    loadFilmsDetails: async (uid) => {
      try {
        let response = await fetch(`https://www.swapi.tech/api/films/${uid}`);
        if (response.ok) response = await response.json();
        else return;
        console.log(response.result);
        const store = getStore();
        setStore({
          ...store,
          film: response.result,
        });
      } catch (error) {
        console.error(error);
      }
    },
  };
}
