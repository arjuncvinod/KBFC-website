import React,{useEffect} from 'react'
import NavBar from '../components/NavBar'
import Image from "../assets/img-data"
import AOS from "aos";
import "aos/dist/aos.css";

function Photos() {
   useEffect(() => {
     AOS.init({ duration: 750 });
   }, []);
  return (
    <main id="photos">
      <NavBar />
      <h1 className='heading'>Our Photos</h1>
      <section>
         {
            Image.map((url,index)=>{
                return (
                  <a
                    href={url.url}
                    className="photos-container"
                    data-aos="zoom-in"
                  >
                    <img src={`${url.url}`} alt="" />
                  </a>
                );
            })
         }
      </section>
    </main>
  )
}

export default Photos
