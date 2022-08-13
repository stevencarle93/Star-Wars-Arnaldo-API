import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsSpecies(){
    const params=useParams()
    return(<p>
        Especie numero {params.speciesId}
    </p>)
}