export const filmStore={
    films:[],
    filmFavorite:[]
}

export function filmsActions(getStore, getActions, setStore){
    return {
        loadFilmsList: async ()=>{
            let results = await fetch("https://www.swapi.tech/api/films")
            if(results.ok) results = await results.json()
            const store = getStore()
            setStore({
                ...store,
                films: results.result
            })
        }
    }
}