import Link from "next/link" 
import "@/app/components/navigatorPages/style.css"

const NavigatorPages = ()=>{
    type LinkType={
        name:string,
        link:string
    }
    
    const enlaces:LinkType[]=[
        {
            name:"Home",
            link:"/"
        },
        {
            name:"Personajes",
            link:"/characters"
        },
        {
            name:"Lugares",
            link:"/locations"
        }, 
        {
            name: "Episodios",
            link: "/episodes"
        }
    ]

    return(
        <div className="NavigatorContainer">
            {enlaces.map((e)=>(<Link className="links" key={e.link} href={e.link}>{e.name}</Link>))}
        </div>
    )
}

export default NavigatorPages;