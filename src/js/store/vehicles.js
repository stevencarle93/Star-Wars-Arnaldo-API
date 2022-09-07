export const vehiclesStore={
    vehicles:[],
    vehicleFavorite:[]
}

export function vehiclesActions(getStore, getActions, setStore){
    return {
        loadVehiclesList: async () => {
          try {
            let response = await fetch("https://www.swapi.tech/api/vehicles");
            if (response.ok) response = await response.json();
            const store = getStore();
            setStore({
              ...store,
              vehicles: response.results,
            });
          } catch (error) {
            console.error(error);
          }
        },
        loadVehiclesDetails: async (uid) => {
          try {
            let response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
            if (response.ok) response = await response.json();
            else return;
            console.log(response.result);
            const store = getStore();
            setStore({
              ...store,
              vehicle: response.result,
            });
          } catch (error) {
            console.error(error);
          }
        },
      };
}