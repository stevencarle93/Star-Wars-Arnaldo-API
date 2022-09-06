export const starshipsStore={
    starships:[],
    starshipsFavorites:[],
}
export function starshipsActions(getStore, getActions, setStore){
    return {
        loadStarshipsList: async ()=>{
            let results = await fetch("https://www.swapi.tech/api/starships")
            if(results.ok) results = await results.json()
            const store = getStore()
            setStore({
                ...store,
                starships: results.results
            })
        }
    }
}