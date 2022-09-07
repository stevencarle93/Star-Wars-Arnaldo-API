import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Films(){
    return (
    <div>
        <h1>Films</h1>
        <Outlet />
    </div>)
}