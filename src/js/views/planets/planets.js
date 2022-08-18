import React from 'react'
import PreviewPlanets from "./previewPlanets";

export default function Planets (props) {
    
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <PreviewPlanets />
                </div>
            </div>
        </div>
    )
}