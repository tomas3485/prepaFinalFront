import type { CharacterT } from "../../type/PersonajeT";

const CharacterCard = ({character}:{character:CharacterT}) => { 
    return(
        <div className="CharacterCard">
            <img src={character.image}/>
            <p>Nombre : {character.name}</p>
            <p>Status : {character.status}</p>
        </div>
    )
}

export default CharacterCard;