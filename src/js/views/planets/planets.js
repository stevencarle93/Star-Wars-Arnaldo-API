import React from 'react'
import PreviewPlanets from "./previewPlanets";

export default function Planets (props) {
    
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <PreviewPlanets />
                </div>
            </div>
        </div>
    )
}