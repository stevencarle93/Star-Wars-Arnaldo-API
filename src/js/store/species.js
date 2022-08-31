export const speciesStore={
    species : []
}

export function speciesActions( getStore, getActions, setStore){
    return {
        loadSpecies:async()=>{
            let results= await fetch("https://www.swapi.tech/api/species")
            if(results.ok) results= await results.json()
            else return
            const store=getStore()
            setStore({
                ...store,
                species:results.results
            })
        }
    }
}