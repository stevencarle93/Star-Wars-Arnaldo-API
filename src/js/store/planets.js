export const planetStore={
    planets:[
    ],
    planetsFavorite:[]
}

export function planetsActions(getStore, getActions, setStore){
    return {
        loadPlanetsList: async()=>{
            let response = await fetch("https://www.swapi.tech/api/planets")
            if(response.ok) response = await response.json()
            const store=getStore()
            setStore({
                ...store,
                planets: response.results
            });
        }
    }
}

 


