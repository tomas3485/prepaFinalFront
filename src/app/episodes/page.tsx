'use client'
import { useEffect, useState } from "react"
import api from "@/api/api"
import EpisodeCard from "../components/EpisodeCard"
import type { ResulEpisodesT } from "../type/EpisodioT"
import Paginacion from "../components/paginacion"
import "@/app/episodes/style.css"

const EpisodesPage = () => {
    const [caps,setCaps]=useState<ResulEpisodesT|null>(null)
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState(1)

    const mostrarEpisodios = ()=>{
        api.get(`/episode?page=${page}`).then((e)=>{
            const {data}:{data:ResulEpisodesT}=e;
            setCaps(data)
        }).finally(()=>{setLoading(false)})
    }

    useEffect(()=>{
        mostrarEpisodios()
    },[page])

    if(loading)return<p>loadin...</p>

    return(
        <div className="episodiosMain">
            <div className="caps">
                {caps && caps.results.map((e)=>(<EpisodeCard key={e.id} episodio={e}/>))}
            </div>
            <Paginacion next={!!caps?.info.next} prev={!!caps?.info.prev} page={page} setPage={(e)=>setPage(e)}/>
        </div>
    )
}

export default EpisodesPage;