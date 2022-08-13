export const planetStore={
    planets:[
    ],
    planetsFavorite:[]
}

export function planetsActions(getStore, getActions, setStore){
    return {
        loadPlanetsList: async()=>{
            let response = await fetch("https://www.swapi.tech/api/planets")
            if(results.ok) results = await response.json()
            const store=getStore()
            setStore({
                ...store,
                planets: response
            });
        }
    }
}

 


