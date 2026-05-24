'use client'
import { useEffect, useState } from "react"
import {type ResultLocationsT } from "../type/LocationT"
import api from "@/api/api"
import LocationCard from "../components/LocationCard"
import Paginacion from "../components/paginacion"
import "@/app/locations/style.css"

const LocationsPage = ()=>{
    const [sitios,setSitios]=useState<ResultLocationsT|null>(null)
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1);

    const mostrarLugares = ()=>{
        api.get(`/location?page=${page}`).then((e)=>{
            const {data}:{data:ResultLocationsT}=e;
            setSitios(data);
        }).finally(()=>setLoading(false))
    }

    useEffect(()=>{
        mostrarLugares();
    },[page]);

    if(loading)return<p>Loading...</p>

    return(
        <div className="mainLocations">
            <div className="sitios">
                {sitios && sitios.results.map((e)=>(<LocationCard key={e.id} location={e}/>))}
            </div>
            <Paginacion next={!!sitios?.info.next} prev={!!sitios?.info.prev} page={page} setPage={(e)=>setPage(e)}/>
        </div>
    )
}

export default LocationsPage;