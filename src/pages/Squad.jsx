import React from 'react'
import NavBar from '../components/NavBar'
import PlayerCard from '../components/PlayerCard'
import players from "../assets/data"

function Squad() {
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
