export const filmStore={
    films:[],
    filmFavorite:[]
}

export function filmsActions(getStore, getActions, setStore){
    return {
        loadFilmsList:()=>{
            console.log("Carga de films")
        }
    }
}