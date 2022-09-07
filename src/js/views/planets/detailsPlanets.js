import { resolveConfig } from 'prettier';
import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext';

export default function DetailsPlanets(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(async()=>{
        await actions.loadPlanetsDetails(params.planetsId)
    },[])
    const {planet} = store

    /*useEffect(async () => {
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
      }, []);*/
      /*const loadPlanetsDetails=()=>{
        let response = fetch("https://www.swapi.tech/api/planets/"+ params.planetsId)
        if(response.ok) response = response.json()
        console.log(response)
        setPlanet(...planets,
             response.results
        )
    }*/
    return(<>
        {planet?(<p>{planet.properties.name}</p>):""}
    </>)
}