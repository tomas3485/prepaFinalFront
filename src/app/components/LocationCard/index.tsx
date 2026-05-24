import type { LocationT} from "@/app/type/LocationT";


const LocationCard = ({location}:{location:LocationT}) => {
    return(
        <div className="locationCard">
            <p>Nombre : {location.name}</p>
            <p>Tipo : {location.type}</p>
            <p>Dimension : {location.dimension}</p>
        </div>
    )
}

export default LocationCard;