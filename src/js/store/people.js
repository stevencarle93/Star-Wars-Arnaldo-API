export const peopleStore={
    people:[],
    peopleFavorite:[]
}

export function peopleActions(getStore, getActions, setStore){
    return {
    loadPeopleList: async() => {
        let response = await fetch("https://www.swapi.tech/api/people")
        if(response.ok) response = await response.json()
        const store = getStore()
        setStore({
            ...store,
            people: response.results
        });
        }
    }
}