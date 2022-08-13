import React from 'react'
import PreviewPlanets from "../../views/planets/previewPlanets";

export default function ListFilms(props){
    return (
        <div className="container-fluid py-2">
            <div className="d-flex flex-row flex-nowrap">
                <PreviewPlanets />
            </div>
        </div>
    )
}