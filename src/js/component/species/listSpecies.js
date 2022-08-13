import React from 'react'
import {Link} from 'react-router-dom'

export default function ListSpecies(props){

    return(

            <ul className="list-group list-group-horizontal overflow-auto">
                {props.species.map((specie,index)=>{
                   return(
                    <li key={index} className="list-group-item">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{specie.name}</h5>
                                <Link to={`/species/${specie.uid}`} className="btn btn-primary">Detalles</Link>
                            </div>
                        </div>
                    </li> 
                   )
                })}
            </ul>
    )
}