export const vehiclesStore={
    vehicles:[],
    vehicleFavorite:[]
}

export function vehiclesActions(getStore, getActions, setStore){
    return {
        loadVehiclesList: async ()=>{
            let results = await fetch("https://www.swapi.tech/api/vehicles")
            if(results.ok) results = await results.json()
            const store = getStore()
            setStore({
                ...store,
                vehicles: results.results
            })
        }
    }
}