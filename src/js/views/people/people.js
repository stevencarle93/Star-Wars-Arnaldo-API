import React from 'react'
import { Outlet } from 'react-router-dom'

export default function People(){
    return (
    <div>
        <h1>People</h1>
        <Outlet />
    </div>)
}