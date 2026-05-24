'use client'
import { useEffect, useState } from "react"
import { ResultCharactersT } from "../type/PersonajeT"
import api from "@/api/api";
import CharacterCard from "../components/CharacterCard";
import Paginacion from "../components/paginacion";
import "@/app/characters/style.css"

const CharactersPage = () => {
    const [personajes,setPersonajes] = useState<ResultCharactersT|null>(null);
    const [loading,setLoading] = useState(true);
    const [page,setPage]=useState(1);

    const mostrarPersonajes = ()=>{
        api.get(`/character?page=${page}`).then((e)=>{
            const {data}:{data:ResultCharactersT}=e;
            setPersonajes(data); 
        }).finally(()=>{setLoading(false)})
    }

    useEffect(()=>{
        mostrarPersonajes();
    },[page])

    if(loading)return<p>Loading...</p>

    return(
        <div className="mainCharacters">
            <div className="personajes">
                {personajes && personajes.results.map((e)=>(<CharacterCard key={e.id} character={e}/>))}
            </div>
            <Paginacion next={!!personajes?.info.next} prev={!!personajes?.info.prev} page={page} setPage={(e)=>{setPage(e)}}/>
        </div>
    )
}

export default CharactersPage;