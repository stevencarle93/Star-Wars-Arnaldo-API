export const peopleStore = {
  people: [],
  peopleFavorite: [],
};

export function peopleActions(getStore, getActions, setStore) {
  return {
    loadPeopleList: async () => {
      try {
        let response = await fetch("https://www.swapi.tech/api/people");
        if (response.ok) response = await response.json();
        const store = getStore();
        setStore({
          ...store,
          people: response.results,
        });
      } catch (error) {
        console.error(error);
      }
    },
    loadPeopleDetails: async (uid) => {
      try {
        let response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
        if (response.ok) response = await response.json();
        else return;
        console.log(response.result);
        const store = getStore();
        setStore({
          ...store,
          person: response.result,
        });
      } catch (error) {
        console.error(error);
      }
    },
  };
}
