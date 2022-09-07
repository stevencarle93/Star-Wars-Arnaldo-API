import { resolveConfig } from 'prettier';
import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext';

export default function DetailsFilms(){
    const {store, actions} = useContext(Context)
    const params = useParams()
    useEffect(async()=>{
        await actions.loadFilmsDetails(params.filmsId)
    },[])
	const { film } = store;
	return <>{film ? <p>{film.properties.title}</p> : ""}</>;
  }