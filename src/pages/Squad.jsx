import React,{useEffect} from 'react'
import NavBar from '../components/NavBar'
import PlayerCard from '../components/PlayerCard'
import players from "../assets/data"
import AOS from 'aos'
import "aos/dist/aos.css";

function Squad() {
   useEffect(() => {
     AOS.init({ duration: 750 });
   }, []);
  return (
    <main id="squad">
        <NavBar />
        <h1 className='heading'>Our Squad</h1>
        <section>
        
        {
            players.map((player)=>{
                return(
                <PlayerCard
                key={player.id}
                name={player.name}
                position={player.position}
                image={player.image}
                />)
            })
        }
        <div className='extracard'></div>
        <div className='extracard'></div>
        <div className='extracard'></div>
        </section>
    </main>
  )
}

export default Squad
