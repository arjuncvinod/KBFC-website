import React from 'react'
import NavBar from '../components/NavBar'
import Image from "../assets/img-data"

function Photos() {
  return (
    <main id="photos">
      <NavBar />
      <h1 className='heading'>Our Photos</h1>
      <section>
         {
            Image.map((url,index)=>{
                return(
                    <a href={url.url} className='photos-container'>
                    <img src={`${url.url}`} alt="" />
                    </a>
                )
            })
         }
      </section>
    </main>
  )
}

export default Photos
