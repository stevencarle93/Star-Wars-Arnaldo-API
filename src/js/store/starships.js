export const starshipsStore={
    starships:[],
    starshipsFavorites:[],
}
let apiStarships = "https://www.swapi.tech/documentation#starships"
export const starshipsAction={
   
    loadstarshipslist: ()=> {
        fetch(apiStarships)
    }
}