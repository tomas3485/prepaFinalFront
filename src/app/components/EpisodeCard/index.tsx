import type { EpisodeT } from "@/app/type/EpisodioT";
import type { CharacterT } from "@/app/type/PersonajeT";


const EpisodeCard = ({episodio}:{episodio: EpisodeT})=>{
    return(
        <div className="episodeCard">
            <p>{episodio.episode}</p>
            <p>{episodio.name}</p>
        </div>
    )
}

export default EpisodeCard;