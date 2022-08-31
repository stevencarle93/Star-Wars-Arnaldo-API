import { resolveConfig } from 'prettier';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsSpecies(){
    const [specie, setSpecie] = useState()

    const params = useParams()
    useEffect(() => {
        // Your code here
        fetch ("https://www.swapi.tech/api/species/"+ params.speciesId).then(
            resp => resp.ok ? resp.json():null
        )
        .then(
            data => setSpecie(data.result) 
        )
        .catch(
            error => console.error(error)
        )
      }, []);
    return(<p>
        Especie numero {JSON.stringify(specie)}
    </p>)
}