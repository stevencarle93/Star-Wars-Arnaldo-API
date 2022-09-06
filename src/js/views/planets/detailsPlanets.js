import { resolveConfig } from 'prettier';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsPlanets(){
    const [planet, setPlanet] = useState()

    const params = useParams()
    useEffect(() => {
        // Your code here
        fetch ("https://www.swapi.tech/api/planets/"+ params.planetsId).then(
            resp => resp.ok ? resp.json():null
        )
        .then(
            data => setPlanet(data.result) 
        )
        .catch(
            error => console.error(error)
        )
      }, []);
    return(<p>
        Planeta numero {JSON.stringify(planet)}
    </p>)
}