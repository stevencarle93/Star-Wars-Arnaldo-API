import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Planets(){
    return (
    <div>
        <h1>Planets</h1>
        <Outlet />
    </div>)
}